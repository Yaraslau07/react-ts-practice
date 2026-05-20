export default function Loading() {
    return (
        <div className="absolute inset-0 m-auto inline-block h-[1em] w-[1em] text-[28px]">
            <style>{`
        @keyframes spinner-fade {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>

            {Array.from({ length: 12 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute bottom-0 left-[0.4629em] h-[0.2777em] w-[0.074em] origin-[center_-0.2222em] rounded-[0.0555em] bg-[#69717d] dark:bg-[#cbd0d6]"
                    style={{
                        animation: 'spinner-fade 1s infinite linear',
                        animationDelay: `${i * 0.083}s`,
                        transform: `rotate(${i * 30}deg)`,
                    }}
                />
            ))}
        </div>
    )
}
