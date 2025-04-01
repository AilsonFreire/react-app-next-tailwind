## Task 1: Implement a UI Component

This project is built with [Next.js](https://nextjs.org), initialized using [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It leverages [Tailwind CSS](https://tailwindcss.com/) for styling, following the design specifications outlined in the [Figma project](https://www.figma.com/design/x929imz6B6bpgqY3KecpHM/Candidate-test?node-id=0-1&p=f&t=PJyzMfGDCSUcXttu-0). The application is configured to use Whitelist Domains, the second project on Figma.

### Trade-offs

- I have done some minor design changes in margins and paddings when the numbers doesn't fit the Tailwind spacings. For ex 14px to 16px.

- If I had more time, I would fix the accessibility, expand the interactivity and fix the responsiveness.

- I would also make a better Button solution since the are multiple different desings for all the different buttons.

- I couldn't find the font Selecta used in the Figma, so I just used the default fonts.

### Getting Started

First, run `yarn` to install the dependencies:

```bash
yarn
```

Second, run `yarn` run the project in the dev mode:

```bash
yarn dev
```

##

To learn more about main project dependencies:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind](https://tailwindcss.com/) - an utility first framework.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Task 2: Refactor and Document

The second part of the challenge is inside of the `components` folder in the component called `BetterButton`

## Task 3: Written Response

If I can't find the design choices (for example inconsistent spacings, non-existing colors, non-added font sizes etc) in the code, and I can't see it in the design system, I would not implement the inconsistency. I would first of all mention it to the designer and suggest ideas, discuss solutions or wait for them to make their choice.

In the case of missing design for mobile responsiveness, I would request to get a design for it. In the case that there are design choices that does not fit great on mobile, I would mention it and discuss solutions.

Then, in the case that the design indeed has an inconsistency by the designer, I would request the designer to pick another choice that already exist in the design system and would fit greatly. After that, I would go ahead and use the existing values in the code.

In the case that the designer says that the choice is purposely done, is not an orphan change and will be adopted across the project, I would ask them to keep the design system up to date and then go ahead and implement it in the core component library in the code as well.
