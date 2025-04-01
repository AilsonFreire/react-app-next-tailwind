import React from "react";

// MessyButton.tsx
//** I created the types for the props, and changed the click function name to onClick as it's action function */
type Props = {
	text: string;
	onClick: () => void;
};

export default function BetterButton({ onClick, text }: Props) {
	return (
		//** I changed to use tailwind as in the whole project just to keep the consistency */
		//** I changed the syntax for readability and shortening */
		<button onClick={onClick} className={"bg-blue-500 p-2.5 text-white"}>
			{text || "Click me"}
		</button>
	);
}
