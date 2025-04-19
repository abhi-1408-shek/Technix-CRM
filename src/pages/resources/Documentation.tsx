
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Documentation</h1>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started Guide</CardTitle>
                <CardDescription>Learn the basics of Technix-CRM</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <FileText className="mt-1" />
                    <div>
                      <h3 className="font-semibold">Installation and Setup</h3>
                      <p className="text-sm text-muted-foreground">Step-by-step guide to get started with Technix-CRM</p>
                    </div>
                  </div>
                  <Button asChild>
                    <Link to="/resources/docs/getting-started">Read More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>API Reference</CardTitle>
                <CardDescription>Complete API documentation for developers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <FileText className="mt-1" />
                    <div>
                      <h3 className="font-semibold">REST API Documentation</h3>
                      <p className="text-sm text-muted-foreground">Detailed API endpoints and usage examples</p>
                    </div>
                  </div>
                  <Button asChild>
                    <Link to="/resources/api-docs">View API Docs</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
