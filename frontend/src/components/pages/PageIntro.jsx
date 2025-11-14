function PageIntro({title, description, children}) {
  return (
    <section className="text-center mb-20">
        <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pulse-ring" />
                <h2 className="relative text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                    {title}
                </h2>
            </div>
        {description && (
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          {description}
        </p>
      )}

      {children && <div className="mt-6">{children}</div>}
    </section>
  );
}

export default PageIntro;