/** Chunk was on 11222 **/
/** chunk id: 782691, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./539854.js"), require("./49124.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk480210 = require("./480210.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk23645 = require("./23645.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk678135 = require("./678135.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk373071 = require("./373071.js"),
  Chunk489495 = require("./489495.js"),
  Chunk189 = require("./189.jsx"),
  Chunk558270 = require("./558270.js"),
  Chunk346537 = require("./346537.js"),
  Chunk830318 = require("./830318.js");

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = {
    [Chunk489495.cq.THUMBNAIL]: null,
    [Chunk489495.cq.STATIC]: null,
    [Chunk489495.cq.REDUCED_MOTION]: null
  },
  E = "debug",
  N = e => {
    let {
      effect: t
    } = e, {
      upsertConfig: n
    } = (0, x.n6)(), i = (0, o.e7)([h.default], () => h.default.getCurrentUser()), [N, S] = r.useState(true), T = r.useRef(null), [O, P] = r.useState(false), [I, k] = r.useState(false), [w, R] = r.useState([]), [A, Z] = r.useState(C), D = r.useRef([]), [L, M] = r.useState(t.name), U = L.toLowerCase().replace(/\s+/g, "_"), F = r.useMemo(() => ({
      id: E,
      skuId: E,
      title: E,
      description: E,
      accessibilityLabel: E,
      reducedMotionSrc: "",
      thumbnailPreviewSrc: "",
      effects: w,
      animationType: s.y.ANIMATION_TYPE_UNSPECIFIED
    }), [w]), B = e => {
      let t = e.currentTarget.files;
      return null == t ? null : t[0]
    }, G = (e, t) => {
      let n = B(t);
      null != n && (0, f.i0)(n, t => {
        Z(a => y(_({}, a), {
          [e]: (0, f.z)(t, n)
        }))
      })
    };
    r.useEffect(() => {
      let e = t.config.effects;
      e.length > 0 && R([...e].map(e => {
        if (null != e.base64) {
          let t = (0, f.$j)(e.base64);
          e.src = t, D.current.push(t)
        }
        return e
      }))
    }, [t.config.effects]), r.useEffect(() => {
      let e = t.config.stillFrames;
      null != e && Object.entries(e).forEach(e => {
        let [t, n] = e;
        if (null != n) {
          let e = (0, f.$j)(n.base64);
          n.src = e, D.current.push(e), Z(e => y(_({}, e), {
            [t]: n
          }))
        }
      })
    }, [t.config.stillFrames]);
    let z = {
        effect: t,
        upsertConfig: n
      },
      V = r.useRef(z);
    return (r.useEffect(() => {
      V.current = z
    }), r.useEffect(() => {
      let {
        effect: e,
        upsertConfig: t
      } = V.current;
      e.readonly || t({
        id: e.id,
        name: L,
        config: {
          effects: w,
          stillFrames: A
        }
      })
    }, [w, A, L]), r.useEffect(() => () => {
      D.current.forEach(e => {
        URL.revokeObjectURL(e)
      }), D.current = []
    }, []), null == i) ? (0, a.jsx)("div", {}) : (0, a.jsx)("div", {
      className: g.root,
      children: (0, a.jsxs)("div", {
        className: g.grid,
        children: [(0, a.jsxs)("div", {
          className: l()(g.col, g.preview),
          children: [(0, a.jsx)("img", {
            src: O ? v : j,
            alt: "",
            width: 450
          }), N && (0, a.jsx)(b.Z, {
            config: F
          })]
        }), (0, a.jsxs)("div", {
          className: g.col,
          children: [(0, a.jsxs)("div", {
            className: l()(g.col, g.section),
            children: [(0, a.jsx)(d.Text, {
              variant: "text-md/normal",
              children: "Profile Effect Name"
            }), (0, a.jsx)("input", {
              type: "text",
              value: L,
              className: g.input,
              onChange: e => {
                M(e.target.value)
              }
            })]
          }), (0, a.jsxs)("div", {
            className: g.grid,
            children: [(0, a.jsxs)("div", {
              className: g.row,
              children: [(0, a.jsx)(d.Text, {
                variant: "text-md/normal",
                children: "Dark Theme"
              }), (0, a.jsx)("input", {
                type: "checkbox",
                checked: O,
                className: g.checkBox,
                onChange: () => {
                  P(!O)
                }
              })]
            }), (0, a.jsxs)("div", {
              className: g.row,
              children: [(0, a.jsx)(d.Text, {
                variant: "text-md/normal",
                children: "Show User Profile"
              }), (0, a.jsx)("input", {
                type: "checkbox",
                checked: I,
                className: g.checkBox,
                onChange: () => {
                  k(!I)
                }
              })]
            })]
          }), (0, a.jsxs)("div", {
            className: g.row,
            children: [(0, a.jsxs)(c.zx, {
              color: c.Tt.GREEN,
              children: ["Upload Animated Layer", (0, a.jsx)(m.Z, {
                ref: T,
                onChange: e => {
                  let t = B(e);
                  null != t && (0, f.i0)(t, async e => {
                    let n = await (0, f.Xv)(e, t, w.length);
                    R(e => [...e, n])
                  })
                },
                multiple: false
              })]
            }), (0, a.jsx)(d.Text, {
              variant: "text-sm/semibold",
              children: "Make sure to upload the bottommost layer first!"
            })]
          }), (0, a.jsxs)("div", {
            className: g.row,
            children: [(0, a.jsxs)(c.zx, {
              color: c.Tt.GREEN,
              children: ["Upload thumbnail.png", (0, a.jsx)(m.Z, {
                ref: T,
                onChange: e => G(f.cq.THUMBNAIL, e),
                multiple: false
              })]
            }), (0, a.jsxs)(c.zx, {
              color: c.Tt.GREEN,
              children: ["Upload static.png", (0, a.jsx)(m.Z, {
                ref: T,
                onChange: e => G(f.cq.STATIC, e),
                multiple: false
              })]
            }), (0, a.jsxs)(c.zx, {
              color: c.Tt.GREEN,
              children: ["Upload reduced_motion.png", (0, a.jsx)(m.Z, {
                ref: T,
                onChange: e => G(f.cq.REDUCED_MOTION, e),
                multiple: false
              })]
            })]
          }), (0, a.jsx)("div", {
            className: g.bottomControls,
            children: (0, a.jsx)("div", {
              className: g.row,
              children: (0, a.jsx)(d.zxk, {
                variant: "primary",
                text: "Replay Animation",
                onClick: () => {
                  S(false), setTimeout(() => S(true), 100)
                }
              })
            })
          }), (0, a.jsxs)("div", {
            className: l()(g.bottomControls, g.shareSection),
            children: [(0, a.jsx)(d.Text, {
              variant: "text-sm/semibold",
              children: "Please download both configs for the drop package!"
            }), (0, a.jsx)(d.Text, {
              variant: "text-sm/bold",
              color: "text-danger",
              children: "WARNING: The full config is really big :0"
            }), (0, a.jsxs)("div", {
              className: g.row,
              children: [(0, a.jsx)(u.Z, {
                fileContents: () => (0, f.yR)(w),
                contentType: "text/plain",
                fileName: "".concat(U, "_timing_config.txt"),
                children: (0, a.jsx)(d.zxk, {
                  variant: "primary",
                  size: "sm",
                  text: "Download Timing Config"
                })
              }), (0, a.jsx)(u.Z, {
                fileContents: () => JSON.stringify(y(_({}, t), {
                  name: L,
                  config: y(_({}, t.config), {
                    effects: w,
                    stillFrames: A
                  })
                })),
                contentType: "text/plain",
                fileName: "".concat(U, "_config.txt"),
                children: (0, a.jsx)(d.zxk, {
                  variant: "primary",
                  size: "sm",
                  text: "Download Full Config"
                })
              })]
            })]
          }), (0, a.jsxs)("div", {
            className: g.section,
            children: [(0, a.jsx)(d.X6q, {
              variant: "heading-lg/bold",
              children: "Still Frames"
            }), (0, a.jsx)("div", {
              className: g.stillFramesContainer,
              children: Object.entries(A).map(e => {
                let [t, n] = e;
                return (0, a.jsxs)("div", {
                  className: g.stillFramePreviewContainer,
                  children: [(0, a.jsx)(d.X6q, {
                    variant: "heading-sm/bold",
                    children: t
                  }), (0, a.jsx)("img", {
                    src: null == n ? true : n.src,
                    className: g.stillFramePreview,
                    alt: ""
                  }), null != n && (0, a.jsx)(c.zx, {
                    size: c.Ph.TINY,
                    color: c.Tt.RED,
                    look: c.iL.OUTLINED,
                    onClick: () => {
                      Z(e => y(_({}, e), {
                        [t]: null
                      }))
                    },
                    children: "Clear"
                  })]
                }, t)
              })
            })]
          }), w.some(e => {
            var t;
            return (null != (t = e.randomizedSources) ? t : []).length > 0
          }) && (0, a.jsxs)("div", {
            className: l()(g.section, g.randomizedRules),
            children: [(0, a.jsx)(d.Text, {
              variant: "text-md/bold",
              children: "Rules of Randomized Effects"
            }), (0, a.jsxs)("ol", {
              children: [(0, a.jsx)("li", {
                children: "When an effect has randomization, all layers with random options must have the same number of options."
              }), (0, a.jsx)("li", {
                children: "The duration for the random options of a layer must be the same"
              }), (0, a.jsx)("li", {
                children: "If multiple layers have randomization, the same option will be used for all layers. (For example, the second option will be used for ALL layers)"
              }), (0, a.jsx)("li", {
                children: 'Click "Replay Animation" to "reroll" the randomization'
              })]
            })]
          }), (0, a.jsx)("div", {
            children: I && (0, a.jsxs)("div", {
              className: l()(g.userProfilePreview, g.preview),
              children: [(0, a.jsx)(p.Z, {
                user: i,
                pendingAvatar: true,
                pendingProfileEffectId: null,
                canUsePremiumCustomization: true,
                isTryItOutFlow: true
              }), (0, a.jsx)(b.Z, {
                config: F
              })]
            })
          })]
        }), (0, a.jsxs)("div", {
          className: l()(g.grid, g.layers),
          children: [(0, a.jsx)("div", {
            className: g.dangerControls,
            children: (0, a.jsx)(d.zxk, {
              variant: "critical-secondary",
              text: "Clear Assets",
              onClick: () => {
                R([]), Z(C)
              }
            })
          }), w.map((e, t) => (0, a.jsxs)("div", {
            className: g.layerForm,
            children: [(0, a.jsxs)("div", {
              className: g.layerPreviewContainer,
              children: [(0, a.jsx)(d.X6q, {
                variant: "heading-md/bold",
                children: e.name
              }), (0, a.jsx)("img", {
                src: e.src,
                className: g.layerPreview,
                alt: ""
              }), null != e.randomizedSources && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(d.X6q, {
                  variant: "heading-md/bold",
                  children: "Alternatives"
                }), e.randomizedSources.map((e, t) => {
                  var n;
                  return (0, a.jsxs)("div", {
                    children: [null != e.filename && (0, a.jsx)(d.X6q, {
                      variant: "heading-sm/semibold",
                      children: e.filename
                    }), (0, a.jsx)("img", {
                      src: e.src,
                      className: g.layerPreview,
                      alt: ""
                    })]
                  }, null != (n = e.filename) ? n : "randomized-".concat(t))
                })]
              })]
            }), (0, a.jsxs)("div", {
              className: l()(g.grid, g.section),
              children: [(0, a.jsxs)("div", {
                className: g.col,
                children: [(0, a.jsx)(d.Text, {
                  variant: "text-md/bold",
                  children: "Start"
                }), (0, a.jsx)("input", {
                  type: "number",
                  value: e.start,
                  className: g.input,
                  onChange: e => {
                    R(n => {
                      let a = [...n],
                        r = n[t];
                      return r.start = +e.target.value, a[t] = r, a
                    })
                  },
                  contentEditable: true
                })]
              }), (0, a.jsxs)("div", {
                className: g.col,
                children: [(0, a.jsx)(d.Text, {
                  variant: "text-md/bold",
                  children: "Duration"
                }), (0, a.jsx)("input", {
                  type: "number",
                  value: e.duration,
                  className: g.input,
                  onChange: e => {
                    R(n => {
                      let a = [...n],
                        r = n[t];
                      return r.duration = +e.target.value, a[t] = r, a
                    })
                  },
                  contentEditable: true
                })]
              })]
            }), (0, a.jsxs)("div", {
              className: l()(g.grid, g.section),
              children: [(0, a.jsxs)("div", {
                className: g.col,
                children: [(0, a.jsx)(d.Text, {
                  variant: "text-md/bold",
                  children: "Loop"
                }), (0, a.jsx)("input", {
                  type: "checkbox",
                  checked: e.loop,
                  className: g.checkBox,
                  onChange: e => {
                    R(n => {
                      let a = [...n],
                        r = n[t];
                      return r.loop = e.target.checked, a[t] = r, a
                    })
                  }
                })]
              }), (0, a.jsx)("div", {
                className: g.col,
                children: e.loop && (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(d.Text, {
                    variant: "text-md/bold",
                    children: "Loop Delay"
                  }), (0, a.jsx)("input", {
                    type: "number",
                    value: e.loopDelay,
                    className: g.input,
                    onChange: e => {
                      R(n => {
                        let a = [...n],
                          r = n[t];
                        return r.loopDelay = +e.target.value, a[t] = r, a
                      })
                    },
                    contentEditable: true
                  })]
                })
              })]
            }), (0, a.jsxs)("div", {
              className: l()(g.row, g.end),
              children: [(0, a.jsxs)("div", {
                className: g.uploadButton,
                children: [(0, a.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  color: "always-white",
                  children: "Add Alternative"
                }), (0, a.jsx)(m.Z, {
                  ref: T,
                  onChange: e => ((e, t) => {
                    let n = B(e);
                    null != n && (0, f.i0)(n, e => {
                      R(a => {
                        let r = [...a],
                          i = a[t];
                        if (null == i) return a;
                        let l = _({}, i);
                        return null == l.randomizedSources && (l.randomizedSources = []), l.randomizedSources.push({
                          src: e,
                          filename: n.name
                        }), r[t] = l, r
                      })
                    })
                  })(e, t),
                  multiple: false
                })]
              }), (0, a.jsx)(d.zxk, {
                variant: "critical-secondary",
                text: "Remove Layer",
                onClick: () => {
                  R(t => t.filter(t => t !== e))
                }
              })]
            })]
          }, t))]
        })]
      })
    })
  }