export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen flex-col border-l border-r bg-slate-200 lg:max-w-[1300px] xl:max-w-[1500px] 2xl:max-w-[1800px]">
      {children}
    </div>
  );
}
