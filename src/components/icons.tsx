/** Inline SVG icon set — stroke style, ~1.6 weight (DESIGN.md). No icon dependency. */
type IconProps = { className?: string };

const base = 'h-5 w-5';

const svg = (path: React.ReactNode, className?: string) => (
  <svg
    className={className ?? base}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {path}
  </svg>
);

export const HomeIcon = ({ className }: IconProps) =>
  svg(
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V21h13V9.5" />
    </>,
    className,
  );

export const BookIcon = ({ className }: IconProps) =>
  svg(
    <>
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5A2.5 2.5 0 0 0 4 20.5z" />
      <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v4H6.5A2.5 2.5 0 0 1 4 20.5z" />
    </>,
    className,
  );

export const MegaphoneIcon = ({ className }: IconProps) =>
  svg(
    <>
      <path d="M3 11v2a1 1 0 0 0 1 1h2l9 5V5L6 10H4a1 1 0 0 0-1 1z" />
      <path d="M18 8.5a4 4 0 0 1 0 7" />
      <path d="M7 14v4a2 2 0 0 0 2 2h1" />
    </>,
    className,
  );

export const ChatIcon = ({ className }: IconProps) =>
  svg(
    <>
      <path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z" />
      <path d="M9 11h6" />
      <path d="M9 14h4" />
    </>,
    className,
  );

export const ShieldIcon = ({ className }: IconProps) =>
  svg(
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6z" />
      <path d="M9.5 12l1.8 1.8L15 10" />
    </>,
    className,
  );

export const CalendarIcon = ({ className }: IconProps) =>
  svg(
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </>,
    className,
  );

export const ArrowRightIcon = ({ className }: IconProps) =>
  svg(
    <>
      <path d="M4 12h16" />
      <path d="M14 6l6 6-6 6" />
    </>,
    className,
  );

export const ChevronDownIcon = ({ className }: IconProps) =>
  svg(<path d="M6 9l6 6 6-6" />, className);

export const CheckIcon = ({ className }: IconProps) =>
  svg(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.3l2.4 2.4 4.6-5" />
    </>,
    className,
  );

export const UsersIcon = ({ className }: IconProps) =>
  svg(
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8" />
      <path d="M18 14.5c2 .9 3 2.9 3 5.5" />
    </>,
    className,
  );

export const LayersIcon = ({ className }: IconProps) =>
  svg(
    <>
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>,
    className,
  );
