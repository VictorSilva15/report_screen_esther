import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ReportScreen } from './src/components/ReportScreen';

export default function App() {
  return (
    <>
      <ReportScreen/>
      <StatusBar style="auto" />
    </>
  );
}


