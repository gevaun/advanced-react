import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">
        Welcome to the Tailwind CSS Workshop
      </h1>
      <p className="text-lg mt-4">
        This is a sample project to demonstrate the usage of Tailwind CSS in a
        React project.
      </p>
      <div className="text-center p-2 mb-">
        Hello this is my workbook following the Advanced React course in{" "}
        <a
          href="https://scrimba.com/advanced-react-c02h"
          target="_blank"
          className="font-semibold inline-flex gap-1 items-center hover:underline underline-offset-2"
        >
          Scrimba <ArrowUpRightIcon className="w-3" />
        </a>
      </div>
    </div>
  );
}
