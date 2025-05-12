type H1props = {
  children: React.ReactNode;
};
export default function H1({ children }: H1props) {
  return (
    <h1 className='text-3xl lg:text-6xl font-tracking-tight'>{children}</h1>
  );
}
