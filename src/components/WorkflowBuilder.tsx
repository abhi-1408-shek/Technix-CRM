
import React, { useEffect, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { motion } from 'framer-motion';
import { Activity, CheckCircle, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Define item types
const ItemTypes = {
  CARD: 'card',
};

// Card component that can be dragged
const DraggableCard = ({ id, text, type, moveCard, findCard, icon: Icon }) => {
  const originalIndex = findCard(id).index;
  
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { id, originalIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const { id: droppedId, originalIndex } = item;
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        moveCard(droppedId, originalIndex);
      }
    },
  }), [id, originalIndex, moveCard]);

  return (
    <motion.div
      ref={drag}
      className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-3 cursor-move 
                  ${isDragging ? 'opacity-50' : 'opacity-100'} 
                  hover:-translate-y-1 transition-all duration-200`}
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center">
        <div className={`mr-3 text-brand-blue dark:text-brand-blue-light`}>
          <Icon size={20} />
        </div>
        <span className="font-medium text-gray-800 dark:text-gray-200">{text}</span>
      </div>
      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        {type === 'leads' && 'Manage your potential customers'}
        {type === 'tasks' && 'Organize your daily workflow'}
        {type === 'analytics' && 'Track your business performance'}
      </div>
    </motion.div>
  );
};

// The canvas where cards can be dropped
const DropTarget = ({ cards, moveCard, findCard, removeCard }) => {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: () => ({ name: 'Canvas' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 min-h-[300px] flex flex-col"
    >
      {cards.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400 py-10">
          <p>Drop cards here to build your workflow</p>
        </div>
      ) : (
        cards.map((card) => (
          <div key={card.id} className="relative">
            <DraggableCard
              id={card.id}
              text={card.text}
              type={card.type}
              moveCard={moveCard}
              findCard={findCard}
              icon={card.icon}
            />
            <button
              onClick={() => removeCard(card.id)}
              className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
            >
              ✕
            </button>
          </div>
        ))
      )}
    </div>
  );
};

// Main component
const WorkflowBuilder = () => {
  const [cards, setCards] = useState([]);
  const [sourceCards] = useState([
    { id: 'leads', text: 'Leads', type: 'leads', icon: Activity },
    { id: 'tasks', text: 'Tasks', type: 'tasks', icon: CheckCircle },
    { id: 'analytics', text: 'Analytics', type: 'analytics', icon: BarChart },
  ]);

  // Load saved layout from localStorage
  useEffect(() => {
    const savedLayout = localStorage.getItem('workflowLayout');
    if (savedLayout) {
      try {
        const parsedLayout = JSON.parse(savedLayout);
        // Add icons to saved cards
        const layoutWithIcons = parsedLayout.map(card => {
          const iconMap = {
            'leads': Activity,
            'tasks': CheckCircle,
            'analytics': BarChart
          };
          return {
            ...card,
            icon: iconMap[card.type]
          };
        });
        setCards(layoutWithIcons);
      } catch (e) {
        console.error('Error parsing saved layout', e);
      }
    }
  }, []);

  // Save layout to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('workflowLayout', JSON.stringify(cards));
  }, [cards]);

  const findCard = (id) => {
    const card = cards.find((c) => c.id === id);
    return {
      card,
      index: cards.indexOf(card),
    };
  };

  const moveCard = (id, atIndex) => {
    const { card, index } = findCard(id);
    const newCards = [...cards];
    newCards.splice(index, 1);
    newCards.splice(atIndex, 0, card);
    setCards(newCards);
  };

  const addCard = (card) => {
    // Create a new instance of the card with a unique ID
    const newCard = {
      ...card,
      id: `${card.id}-${Date.now()}`,
    };
    setCards([...cards, newCard]);
  };

  const removeCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const resetCanvas = () => {
    setCards([]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <motion.div 
        className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 mb-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-purple-600 dark:from-brand-blue-light dark:to-purple-400">
            Interactive Workflow Builder
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">Components</h3>
              
              {sourceCards.map((card) => (
                <div
                  key={card.id}
                  className="mb-3 cursor-pointer"
                  onClick={() => addCard(card)}
                >
                  <motion.div
                    className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="flex items-center">
                      <div className="mr-3 text-brand-blue dark:text-brand-blue-light">
                        <card.icon size={20} />
                      </div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">{card.text}</span>
                    </div>
                  </motion.div>
                </div>
              ))}
              
              <div className="mt-6">
                <Button
                  onClick={resetCanvas}
                  variant="outline"
                  className="w-full border-red-300 text-red-500 hover:bg-red-50 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/20"
                >
                  Reset Canvas
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">Workflow Canvas</h3>
            <DropTarget
              cards={cards}
              moveCard={moveCard}
              findCard={findCard}
              removeCard={removeCard}
            />
          </div>
        </div>
      </motion.div>
    </DndProvider>
  );
};

export default WorkflowBuilder;
