import React from "react";

type Props = {
	size: string;
};

export const SigniflyIcon = ({ size }: Props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 48 48"
			fill="none"
		>
			<g clipPath="url(#clip0_167_436)">
				<rect width="48" height="48" rx="12" fill="white" />
				<rect width="48" height="48" fill="black" />
				<path
					d="M15.2129 28.23L19.0577 28.2981C19.2619 31.0882 21.4735 32.9596 24.808 32.9596C27.6321 32.9596 29.6736 31.7006 29.6736 29.4209C29.6736 26.9031 27.1898 26.3587 23.413 25.6782C19.466 24.9976 15.7233 23.7387 15.7233 19.0092C15.7233 14.8921 19.1938 12 24.1956 12C29.4014 12 32.9741 15.0963 33.1782 19.3835H29.3334C29.0612 16.9677 27.0537 15.3005 24.1956 15.3005C21.5076 15.3005 19.6362 16.4913 19.6362 18.737C19.6362 21.1868 22.086 21.6972 25.8288 22.3437C29.7757 23.0582 33.6206 24.3171 33.5865 29.0126C33.5865 33.2318 29.9118 36.26 24.774 36.26C19.0237 36.26 15.315 32.9255 15.2129 28.23Z"
					fill="white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_167_436">
					<rect width="48" height="48" rx="12" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};
