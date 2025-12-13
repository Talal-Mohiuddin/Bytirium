import SvgBack from "@/components/svgback";

export default function Page() {
  return (
    <>
      {/* Hero section */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundColor: "hsl(0, 0%, 7%)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <SvgBack />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "960px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              lineHeight: 1.25,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            HOW GREAT DESIGN BOOSTS
            <br />
            YOUR BRAND’S ONLINE PRESENCE
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.85)",
              maxWidth: "780px",
              margin: "0 auto",
            }}
          >
            Great design is more than visuals; it’s a strategic tool that builds trust and recognition. It
            shapes how audiences perceive your brand and drives meaningful engagement online.
          </p>
        </div>
      </section>

      {/* Image section (separate from hero) */}
      <section
        style={{
          backgroundColor: "hsl(0, 0%, 7%)",
          padding: "40px 24px 64px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "960px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "820px",
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor: "#1a1a1a",
              margin: "0 auto",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1880&auto=format&fit=crop"
              alt="Design impact visual"
              style={{
                display: "block",
                width: "100%",
                height: "420px", // reduced height
                objectFit: "cover",
              }}
            />
            {/* Play indicator overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "96px",
                  height: "96px",
                  borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(2px)",
                }}
              >
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "18px solid rgba(255,255,255,0.9)",
                    borderTop: "12px solid transparent",
                    borderBottom: "12px solid transparent",
                    marginLeft: "6px",
                  }}
                />
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.85)",
              maxWidth: "880px",
              margin: "16px auto 0",
            }}
          >
            Today’s digital-first world, design is more than just looks—it’s how customers experience your
            brand. From your website’s layout to your social media graphics, design plays a key role in
            building trust and engagement. Here’s why great design is essential for boosting your online
            presence.
          </p>
        </div>
      </section>
    </>
  );
}
