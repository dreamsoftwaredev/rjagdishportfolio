import { skillGroups } from "../data/portfolio";

type SkillsProps = {
  compact?: boolean;
};

export default function Skills({ compact = false }: SkillsProps) {
  const groups = compact ? skillGroups.slice(0, 3) : skillGroups;

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-sky-300">Technical Skills</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            A practical stack for shipping modern web products
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          The portfolio is centered around the same technologies used in current production work, from responsive interface development to API integration and database-backed authentication flows.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {groups.map((group) => (
          <article key={group.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-xl font-semibold text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-slate-950/55 px-4 py-2 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
