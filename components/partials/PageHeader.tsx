import Breadcrumbs from "@/components/Breadcrumbs";
import { humanize } from "@/lib/utils/textConverter";

const PageHeader = ({ title }: { title: string }) => {
  return (
    <section>
      <div className="text-center">
        <div className="from-body to-theme-light dark:from-darkmode-body dark:to-darkmode-theme-light rounded-2xl bg-gradient-to-b px-8 py-14">
          <h1>{humanize(title)}</h1>
          <Breadcrumbs className="mt-6" />
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
