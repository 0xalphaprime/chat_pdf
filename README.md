# Chat PDF

- [Clerk Docs](https://clerk.com/docs/quickstarts/nextjs/)
- [shadcn Docs](https://ui.shadcn.com/docs)
- [hypercolor Docs](https://hypercolor.dev)
- [Neon DB](https://console.neon.tech/app/projects/)
- [Drizzle ORM](https://drizzle.dev/docs/)

- **Attention is All You Need**
    - [Paper](https://arxiv.org/pdf/1706.03762.pdf)

- **Retrieval Augmented Generation**
    - [Paper](https://arxiv.org/pdf/1907.01470.pdf)

    - **Project:**
        1. obtain the pdf
        2. split and segment the pdf
        3. vectorize and embed the individual docs
        4. store the vectors into pineconedb
        --search--
        5. embed the query
        6. query pineconedb for similar vectors
        7. extract metadata from the similar vectors
        8. feed the metadata into openai prompt
  

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



#### **JavaScript vs TypeScript**

I'm glad you found the information helpful! Transitioning from JavaScript to TypeScript can be smooth, especially if you already have a good grasp of JavaScript. However, there are a few core syntactical concepts in TypeScript that you should be aware of:

1. **Type Annotations:** TypeScript allows you to specify the type of a variable, parameter, or function return value. This is one of its primary features.
    ```typescript
    let name: string = "John";
    let age: number = 25;
    function greet(person: string): string {
        return "Hello, " + person;
    }
    ```

2. **Interfaces:** TypeScript uses interfaces to define the structure of an object. This is a way to ensure that an object matches a specific shape.
    ```typescript
    interface Person {
        firstName: string;
        lastName: string;
        age?: number; // ? makes the property optional
    }

    const john: Person = {
        firstName: "John",
        lastName: "Doe",
        age: 25
    };
    ```

3. **Classes:** While JavaScript (ES6 onwards) also supports classes, TypeScript enhances this with type annotations, access modifiers (public, private, protected), and more.
    ```typescript
    class Animal {
        private name: string;
        
        constructor(name: string) {
            this.name = name;
        }
        
        move(distance: number) {
            console.log(`${this.name} moved ${distance} meters.`);
        }
    }
    ```

4. **Generics:** Generics allow you to create reusable code components that work with different types.
    ```typescript
    function identity<T>(arg: T): T {
        return arg;
    }
    let output = identity<string>("Hello");
    ```

5. **Enums:** TypeScript supports enums, which allow you to define a set of named constants. This is not present in regular JavaScript.
    ```typescript
    enum Color {
        Red,
        Green,
        Blue
    }
    let c: Color = Color.Green;
    ```

6. **Modules:** TypeScript supports module systems (like ES6 modules) to better organize and manage your code.
    ```typescript
    // In file "math.ts"
    export function add(x: number, y: number): number {
        return x + y;
    }

    // In another file
    import { add } from './math';
    ```

7. **Type Assertions:** If you're certain about the type of a variable, you can use type assertions.
    ```typescript
    let someValue: any = "this is a string";
    let strLength: number = (<string>someValue).length;
    // or
    let strLength2: number = (someValue as string).length;
    ```

8. **Union Types:** TypeScript allows a variable to be one of several types.
    ```typescript
    function displayId(id: string | number) {
        console.log("Display ID:", id);
    }
    displayId(101);    // Display ID: 101
    displayId("202");  // Display ID: 202
    ```

9. **Type Aliases:** You can create a new name for a type using the `type` keyword.
    ```typescript
    type StringOrNumber = string | number;
    ```

10. **Type Guards:** TypeScript allows you to narrow down the type of a variable within a certain scope using typeof, instanceof, or custom type guards.
    ```typescript
    function isString(test: any): test is string {
        return typeof test === "string";
    }
    ```

11. **Decorators:** TypeScript supports decorators, a design pattern for adding annotations and metaprogramming syntax for class declarations and members.

12. **Advanced Types:** TypeScript introduces concepts like intersection types, conditional types, mapped types, and more to help you create complex type logic.

As you venture into a TypeScript project, it would be beneficial to familiarize yourself with the TypeScript documentation and maybe try a few sample projects to get a feel for these concepts. Remember, TypeScript is a superset of JavaScript, so most of your JavaScript knowledge will carry over directly!