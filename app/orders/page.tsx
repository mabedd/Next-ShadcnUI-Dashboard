'use client';

import { DataTable } from '@/components/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import React, { useEffect, useState } from 'react';
import PageTitle from '@/components/PageTitle';
import { cn } from '@/lib/utils';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { CardContent } from '@/components/Card';

type Props = {};
type Payment = {
  order: string;
  status: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'order',
    header: 'Order',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      return (
        <div
          className={cn('font-medium w-fit px-4 py-2 rounded-lg', {
            'bg-red-200': row.getValue('status') === 'Pending',
            'bg-orange-200': row.getValue('status') === 'Processing',
            'bg-green-200': row.getValue('status') === 'Completed',
          })}
        >
          {row.getValue('status')}
        </div>
      );
    },
  },
  {
    accessorKey: 'lastOrder',
    header: 'Last Order',
  },
  {
    accessorKey: 'method',
    header: 'Method',
  },
];

const data: Payment[] = [
  {
    order: 'ORD001',
    status: 'Pending',
    lastOrder: '2023-01-15',
    method: 'Credit Card',
  },
  {
    order: 'ORD002',
    status: 'Processing',
    lastOrder: '2023-02-20',
    method: 'PayPal',
  },
  {
    order: 'ORD003',
    status: 'Completed',
    lastOrder: '2023-03-10',
    method: 'Stripe',
  },
  {
    order: 'ORD004',
    status: 'Pending',
    lastOrder: '2023-04-05',
    method: 'Venmo',
  },
  {
    order: 'ORD005',
    status: 'Completed',
    lastOrder: '2023-05-12',
    method: 'Bank Transfer',
  },
  {
    order: 'ORD006',
    status: 'Processing',
    lastOrder: '2023-06-18',
    method: 'Apple Pay',
  },
  {
    order: 'ORD007',
    status: 'Completed',
    lastOrder: '2023-07-22',
    method: 'Google Pay',
  },
  {
    order: 'ORD008',
    status: 'Pending',
    lastOrder: '2023-08-30',
    method: 'Cryptocurrency',
  },
  {
    order: 'ORD009',
    status: 'Processing',
    lastOrder: '2023-09-05',
    method: 'Alipay',
  },
  {
    order: 'ORD010',
    status: 'Completed',
    lastOrder: '2023-10-18',
    method: 'WeChat Pay',
  },
  {
    order: 'ORD011',
    status: 'Pending',
    lastOrder: '2023-11-25',
    method: 'Square Cash',
  },
  {
    order: 'ORD012',
    status: 'Completed',
    lastOrder: '2023-12-08',
    method: 'Zelle',
  },
  {
    order: 'ORD013',
    status: 'Processing',
    lastOrder: '2024-01-15',
    method: 'Stripe',
  },
  {
    order: 'ORD014',
    status: 'Completed',
    lastOrder: '2024-02-20',
    method: 'PayPal',
  },
  {
    order: 'ORD015',
    status: 'Pending',
    lastOrder: '2024-03-30',
    method: 'Credit Card',
  },
];

const statusCounts = [
  { status: 'Pending', count: 5 },
  { status: 'Processing', count: 4 },
  { status: 'Completed', count: 6 },
];

// Function to count order statuses
const countStatuses = (data: any) => {
  const counts = data.reduce((acc: any, curr: any) => {
    acc[curr.status] = (acc[curr.status] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(counts).map((status) => ({
    status,
    count: counts[status],
  }));
};

export default function OrdersPage({}: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col gap-5 w-full p-4">
      <PageTitle title="Orders" />
      <h2 className="text-lg font-semibold">Summary</h2>
      <CardContent>
        <p className="p-4 font-semibold">Overview</p>
        <BarChart
          width={600}
          height={400}
          data={statusCounts}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="status" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#88888" />
        </BarChart>
      </CardContent>
      <div className="flex justify-between items-center">
        <div className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded flex-grow"
          />
          <button className="ml-2 bg-blue-500 text-white p-2 rounded flex-shrink-0">
            Filter
          </button>
        </div>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
