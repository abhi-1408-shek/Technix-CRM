
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ApiDocs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">API Documentation</h1>
          
          <Tabs defaultValue="rest">
            <TabsList>
              <TabsTrigger value="rest">REST API</TabsTrigger>
              <TabsTrigger value="sdks">SDKs</TabsTrigger>
              <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            </TabsList>
            
            <TabsContent value="rest">
              <Card>
                <CardHeader>
                  <CardTitle>REST API Reference</CardTitle>
                  <CardDescription>Complete documentation for our RESTful API endpoints</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Authentication</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        All API endpoints require authentication using Bearer token in the Authorization header.
                      </p>
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                        <code>
                          Authorization: Bearer your-api-key-here
                        </code>
                      </pre>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Base URL</h3>
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                        <code>
                          https://api.technix-crm.com/v1
                        </code>
                      </pre>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Rate Limiting</h3>
                      <p className="text-sm text-muted-foreground">
                        Requests are limited to 1000 per hour per API key.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="sdks">
              <Card>
                <CardHeader>
                  <CardTitle>Official SDKs</CardTitle>
                  <CardDescription>Native libraries for popular programming languages</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">JavaScript/TypeScript</h3>
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mt-2">
                        <code>npm install @technix-crm/sdk</code>
                      </pre>
                    </div>
                    <div>
                      <h3 className="font-semibold">Python</h3>
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mt-2">
                        <code>pip install technix-crm</code>
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="webhooks">
              <Card>
                <CardHeader>
                  <CardTitle>Webhooks</CardTitle>
                  <CardDescription>Real-time event notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Webhooks allow your application to receive real-time updates when events occur in your Technix-CRM account.
                    </p>
                    <div>
                      <h3 className="font-semibold">Available Events</h3>
                      <ul className="list-disc list-inside mt-2 space-y-2">
                        <li>contact.created</li>
                        <li>contact.updated</li>
                        <li>deal.stage_changed</li>
                        <li>task.completed</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApiDocs;
