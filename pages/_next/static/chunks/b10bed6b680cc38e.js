(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 31713, e => {
    "use strict";
    var a = e.i(43476),
        s = e.i(71645);

    function t() {
        let e = (0, s.useRef)(null),
            t = (0, s.useRef)(null),
            n = (0, s.useRef)(null),
            r = (0, s.useRef)(null),
            i = (0, s.useRef)(null),
            [l, c] = (0, s.useState)(!1),
            [d, o] = (0, s.useState)(!1),
            [u, m] = (0, s.useState)(!0),
            [h, p] = (0, s.useState)(0),
            [v, x] = (0, s.useState)([]),
            y = ["/song1.mp3", "/song2.mp3", "/song3.mp3"],
            j = a => {
                e.current && (e.current.src = y[a], e.current.play().then(() => {
                    m(!1), p(a), i.current ? .classList.remove("paused")
                }).catch(e => {
                    console.log("autoplay blocked"), m(!0), i.current ? .classList.add("paused")
                }))
            };
        return (0, s.useEffect)(() => {
            let e = e => {
                "contextmenu" === e.type && e.preventDefault(), "keydown" === e.type && (e.ctrlKey || e.metaKey) && ["c", "u", "s"].includes(e.key) && e.preventDefault()
            };
            return document.addEventListener("contextmenu", e), document.addEventListener("keydown", e), () => {
                document.removeEventListener("contextmenu", e), document.removeEventListener("keydown", e)
            }
        }, []), (0, s.useEffect)(() => {
            let a = e.current,
                s = () => {
                    e.current && j((h + 1) % y.length)
                };
            return a ? .addEventListener("ended", s), () => a ? .removeEventListener("ended", s)
        }, [h, d]), (0, a.jsxs)("div", {
            className: "valentine-wrapper",
            children: [(0, a.jsx)("audio", {
                ref: e,
                preload: "auto"
            }), (0, a.jsx)("button", {
                className: "magic-btn",
                ref: r,
                onClick: () => {
                    let e = ["❤️", "💖", "💕", "💘", "🌸", "✨"],
                        a = Array.from({
                            length: 50
                        }).map((a, s) => ({
                            id: Date.now() + s + Math.random(),
                            left: 100 * Math.random() + "%",
                            animationDuration: 3 * Math.random() + 3 + "s",
                            opacity: .6 * Math.random() + .4,
                            size: 20 * Math.random() + 15 + "px",
                            emoji: e[Math.floor(Math.random() * e.length)],
                            delay: .5 * Math.random() + "s"
                        }));
                    x(e => [...e, ...a]), setTimeout(() => {
                        x(e => e.filter(e => !a.includes(e)))
                    }, 7e3)
                },
                style: {
                    opacity: 0
                },
                children: "Magic Touch ✨"
            }), (0, a.jsxs)("div", {
                className: "music-control",
                id: "musicCtrl",
                ref: i,
                onClick: () => {
                    e.current && (e.current.paused ? (e.current.play(), m(!1), i.current ? .classList.remove("paused")) : (e.current.pause(), m(!0), i.current ? .classList.add("paused")))
                },
                style: {
                    opacity: 0
                },
                children: [(0, a.jsxs)("div", {
                    className: "visualizer",
                    children: [(0, a.jsx)("div", {
                        className: "bar"
                    }), (0, a.jsx)("div", {
                        className: "bar"
                    }), (0, a.jsx)("div", {
                        className: "bar"
                    }), (0, a.jsx)("div", {
                        className: "bar"
                    })]
                }), (0, a.jsx)("span", {
                    className: "music-text",
                    children: u ? "PAUSED" : "PLAYING"
                })]
            }), (0, a.jsx)("div", {
                className: "hearts-container",
                children: v.map(e => (0, a.jsx)("div", {
                    className: "falling-heart",
                    style: {
                        left: e.left,
                        animationDuration: e.animationDuration,
                        animationDelay: e.delay,
                        opacity: e.opacity,
                        fontSize: e.size
                    },
                    children: e.emoji
                }, e.id))
            }), (0, a.jsxs)("div", {
                className: `entry-screen ${l?"hidden":""}`,
                ref: t,
                children: [(0, a.jsx)("div", {
                    className: "cinematic-glow"
                }), (0, a.jsxs)("div", {
                    className: "intro-content",
                    children: [(0, a.jsx)("p", {
                        className: "intro-sub",
                        children: "A Special Surprise Awaits"
                    }), (0, a.jsx)("h1", {
                        className: "intro-title",
                        children: "Happy Valentine's Day 🤍"
                    }), (0, a.jsxs)("button", {
                        className: "pro-enter-btn",
                        onClick: () => {
                            c(!0), e.current && !d && (j(0), o(!0)), setTimeout(() => {
                                n.current ? .classList.add("visible"), r.current && (r.current.style.opacity = "1"), i.current && (i.current.style.opacity = "1")
                            }, 600)
                        },
                        children: [(0, a.jsx)("span", {
                            className: "btn-text",
                            children: "Open Experience"
                        }), (0, a.jsx)("span", {
                            className: "btn-icon",
                            children: "💌"
                        })]
                    })]
                })]
            }), (0, a.jsx)("div", {
                className: "bg-canvas"
            }), (0, a.jsx)("div", {
                className: "main-card-container",
                ref: n,
                children: (0, a.jsxs)("div", {
                    className: "glass-card",
                    children: [(0, a.jsxs)("header", {
                        className: "card-header",
                        children: [(0, a.jsx)("div", {
                            className: "date-badge",
                            children: "February 14, 2026 💕"
                        }), (0, a.jsx)("h1", {
                            className: "main-title",
                            children: "My Valentine Wish"
                        }), (0, a.jsx)("div", {
                            className: "for-text",
                            children: "For My Love 🌹"
                        })]
                    }), (0, a.jsx)("p", {
                        className: "sinhala-para p-delay-1",
                        children: "You are the Most Beautiful Gift I Have Ever Received in My Life... 💞"
                    }), (0, a.jsxs)("p", {
                        className: "sinhala-para p-delay-2",
                        children: ["There are Almost no Secrets Between Us 🤍", (0, a.jsx)("br", {}), "In Sadness and in Happiness, Let Us Always Be with Love 🥰"]
                    }), (0, a.jsxs)("p", {
                        className: "sinhala-para p-delay-3",
                        children: [(0, a.jsx)("b", {
                            children: "You Mean So Much to Me."
                        }), (0, a.jsx)("br", {}), "Not Just on Valentine's Day, But You are Special to Me Every Single Day 💖"]
                    }), (0, a.jsx)("div", {
                        className: "poem-box",
                        children: (0, a.jsxs)("div", {
                            className: "poem-text",
                            children: ["Like a Memory that Brings a Smile,", (0, a.jsx)("br", {}), "You Have Etched Love Into My Heart,", (0, a.jsx)("br", {}), "You are the Most Beautiful and Beloved Gift of My Life 💘"]
                        })
                    }), (0, a.jsxs)("p", {
                        className: "sinhala-para p-delay-4",
                        children: ["You are the Most Beautiful Memory of My Life...", (0, a.jsx)("br", {}), "That Will Never Fade. Love You Always 💞"]
                    }), (0, a.jsxs)("div", {
                        className: "signature-section",
                        children: [(0, a.jsx)("p", {
                            className: "forever-text",
                            children: "Forever & Always, With All My Heart... 💗"
                        }), (0, a.jsx)("div", {
                            className: "signature-name",
                            children: "Your Beloved Partner 🫂💖"
                        })]
                    }), (0, a.jsx)("footer", {
                        className: "card-footer",
                        children: "Made with Love and Magic ✨"
                    })]
                })
            })]
        })
    }
    e.s(["default", () => t])
}]);