import React from "react";

export default function RecentBlogs() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#0a0a0a",
      }}
    >
      {/* Horizontal purple glow band */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          height: "180px",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(138,43,226,0.5) 30%, rgba(148,0,211,0.7) 50%, rgba(138,43,226,0.5) 70%, transparent 100%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Recent Blogs
        </h2>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.7)",
            marginBottom: "24px",
          }}
        >
          Discover The Latest Insights, Tips, And Expert Advice On Digital World
        </p>
        <button
          style={{
            borderRadius: "9999px",
            padding: "10px 24px",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#ffffff",
            background: "transparent",
            border: "1px solid rgba(168,85,247,0.8)",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          View All Blogs
        </button>
      </div>
    </section>
  );
}
