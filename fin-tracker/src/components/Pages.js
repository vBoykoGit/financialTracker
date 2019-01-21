import React from 'react';
import Header from './Header';
import { History } from './containers/History';
import { OperationForm } from './containers/OperationForm';
import { AmountForm } from './containers/AmountForm';

const PageTemplate = ({ children }) =>
    <div>
        <Header />
        {children}
    </div>

export const OperationPage = () =>
    <PageTemplate>
        <OperationForm />
        <History />
    </PageTemplate>

export const AmountPage = () =>
    <PageTemplate>
        <AmountForm />
    </PageTemplate>