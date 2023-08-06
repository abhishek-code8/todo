export type task = {
    id: string,
    name: string,
    status: boolean,
    body: string,
}
export const todoList: task[] = [
    {
        id: "123",
        name: "Task1",
        status: false,
        body: "This needs to be done",
    },
    {
        id: "456",
        name: "Task2",
        status: true,
        body: "Please complete this task",
    },
    {
        id: "789",
        name: "Task3",
        status: false,
        body: "Don't forget about this one",
    },
    {
        id: "101",
        name: "Task4",
        status: true,
        body: "Urgent action required",
    },
    {
        id: "202",
        name: "Task5",
        status: false,
        body: "Take your time with this task",
    },
    {
        id: "303",
        name: "Task6",
        status: true,
        body: "Let's get it done",
    },
];