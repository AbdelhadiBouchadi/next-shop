import Image from 'next/image';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <Image
      src={'/logo.svg'}
      alt={`${process.env.COMPANY_NAME}`}
      width={50}
      height={50}
    />
  );
}
