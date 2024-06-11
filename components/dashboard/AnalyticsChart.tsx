"use client";

import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import data from "@/data/analytics";

const AnalyticsChart = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Analytics For This Year</CardTitle>
          <CardDescription>Views Per Month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-[100%]">
            <ResponsiveContainer>
              <LineChart width={1100} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AnalyticsChart;
