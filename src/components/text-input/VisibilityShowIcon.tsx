import React, { FC } from 'react';

interface VisibilityShowIcon {
  className?: string;
}

const VisibilityShowIcon: FC<VisibilityShowIcon> = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_400_3869)">
      <path
        d="M7.99996 3.99997C10.5266 3.99997 12.78 5.41997 13.88 7.66663C13.4866 8.47997 12.9333 9.17997 12.2733 9.74663L13.2133 10.6866C14.14 9.86664 14.8733 8.83997 15.3333 7.66663C14.18 4.73997 11.3333 2.66663 7.99996 2.66663C7.15329 2.66663 6.33996 2.79997 5.57329 3.04663L6.67329 4.14663C7.10663 4.05997 7.54663 3.99997 7.99996 3.99997ZM7.28663 4.75997L8.66663 6.13997C9.04663 6.30663 9.35329 6.6133 9.51996 6.9933L10.9 8.3733C10.9533 8.14663 10.9933 7.90663 10.9933 7.65997C11 6.00663 9.65329 4.66663 7.99996 4.66663C7.75329 4.66663 7.51996 4.69997 7.28663 4.75997ZM1.33996 2.57997L3.12663 4.36663C2.03996 5.21997 1.17996 6.3533 0.666626 7.66663C1.81996 10.5933 4.66663 12.6666 7.99996 12.6666C9.01329 12.6666 9.98663 12.4733 10.88 12.12L13.16 14.4L14.1 13.46L2.27996 1.6333L1.33996 2.57997ZM6.33996 7.57997L8.07996 9.31997C8.05329 9.32663 8.02663 9.3333 7.99996 9.3333C7.07996 9.3333 6.33329 8.58663 6.33329 7.66663C6.33329 7.6333 6.33996 7.6133 6.33996 7.57997ZM4.07329 5.3133L5.23996 6.47997C5.08663 6.84663 4.99996 7.24663 4.99996 7.66663C4.99996 9.31997 6.34663 10.6666 7.99996 10.6666C8.41996 10.6666 8.81996 10.58 9.17996 10.4266L9.83329 11.08C9.24663 11.24 8.63329 11.3333 7.99996 11.3333C5.47329 11.3333 3.21996 9.9133 2.11996 7.66663C2.58663 6.7133 3.26663 5.92663 4.07329 5.3133Z"
        fill="#323232"
      />
    </g>
    <defs>
      <clipPath id="clip0_400_3869">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default VisibilityShowIcon;
