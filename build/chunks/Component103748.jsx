/** Chunk was on 87557 **/
/** chunk id: 103748, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
}), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./321073.js"), require("./457529.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk854284 = require("./854284.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk900686 = require("./900686.js"),
  Chunk817363 = require("./817363.jsx"),
  Chunk287070 = require("./287070.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk43708 = require("./43708.js"),
  Chunk14752 = require("./14752.js"),
  Chunk930442 = require("./930442.jsx"),
  Chunk553622 = require("./553622.js"),
  Chunk526565 = require("./526565.js"),
  Chunk124733 = require("./124733.js"),
  Chunk865524 = require("./865524.js"),
  Chunk154878 = require("./154878.js");

function y(e) {
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

function A(e, t) {
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
    [Chunk14752.qH.THUMBNAIL]: null,
    [Chunk14752.qH.STATIC]: null,
    [Chunk14752.qH.REDUCED_MOTION]: null
  },
  S = "debug",
  O = "reduced-motion-preview-modal",
  T = e => {
    let {
      transitionState: t,
      onClose: n,
      frameSrc: l,
      placeholderSrc: r
    } = e;
    return (0, a.jsx)(c.EOs, {
      transitionState: t,
      size: c.rIJ.MEDIUM,
      parentComponent: "ReducedMotionPreviewModal",
      children: (0, a.jsxs)(c.$mQ, {
        className: f.Xd,
        children: [(0, a.jsx)("div", {
          className: f.y6,
          children: (0, a.jsx)(c.K0, {
            "aria-label": "Close",
            onClick: n,
            icon: c.d$L,
            variant: "overlay-secondary",
            size: "sm"
          })
        }), (0, a.jsxs)("div", {
          className: f.rU,
          children: [(0, a.jsx)("img", {
            src: r,
            alt: "",
            className: f.Vw,
            "aria-hidden": true
          }), null != l && "" !== l && (0, a.jsx)("img", {
            src: l,
            className: f.BS,
            alt: "Reduced motion preview"
          })]
        })]
      })
    })
  },
  E = e => {
    let {
      type: t,
      frame: n,
      showDarkTheme: l,
      onClear: r
    } = e, s = t === x.qH.REDUCED_MOTION, o = s ? l ? j : _ : l ? b : v, d = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("img", {
        src: o,
        alt: "",
        className: f.XM,
        "aria-hidden": true
      }), (null == n ? true : n.src) != null && "" !== n.src && (0, a.jsx)("img", {
        src: n.src,
        className: f.SD,
        alt: ""
      })]
    });
    return (0, a.jsxs)("div", {
      className: f.pK,
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-sm/bold",
        children: t
      }), s ? (0, a.jsx)(c.DUT, {
        className: i()(f.zd, f.eB),
        onClick: () => {
          (0, c.kBI)(O) ? (0, c.OoC)(O) : (0, c.mMO)(() => Promise.resolve(e => {
            var t;
            return (0, a.jsx)(T, A(y({}, e), {
              frameSrc: null != (t = null == n ? true : n.src) ? t : null,
              placeholderSrc: o
            }))
          }), {
            modalKey: O,
            onCloseRequest: () => (0, c.OoC)(O)
          })
        },
        children: d
      }) : (0, a.jsx)("div", {
        className: f.zd,
        children: d
      }), null != n && (0, a.jsx)(c.Button, {
        variant: "critical-secondary",
        size: "sm",
        text: "Clear",
        onClick: r
      })]
    })
  },
  N = e => {
    let {
      effect: t
    } = e, {
      upsertConfig: n
    } = (0, h.wu)(), r = (0, o.bG)([p.default], () => p.default.getCurrentUser()), [j, _] = l.useState(true), O = l.useRef({}), [T, N] = l.useState(false), [w, I] = l.useState(false), [P, k] = l.useState([]), [R, D] = l.useState(C), M = l.useRef([]), [L, U] = l.useState(t.name), B = L.toLowerCase().replace(/\s+/g, "_"), G = l.useMemo(() => ({
      id: S,
      skuId: S,
      title: S,
      description: S,
      accessibilityLabel: S,
      reducedMotionSrc: "",
      thumbnailPreviewSrc: "",
      effects: P,
      animationType: s.l.ANIMATION_TYPE_UNSPECIFIED
    }), [P]), F = e => {
      let t = e.currentTarget.files;
      return null == t ? null : t[0]
    }, V = (e, t) => {
      let n = F(t);
      null != n && (0, x.Mz)(n, t => {
        D(a => A(y({}, a), {
          [e]: (0, x.GT)(t, n)
        }))
      })
    };
    l.useEffect(() => {
      let e = t.config.effects;
      e.length > 0 && k(e)
    }, [t.config.effects]), l.useEffect(() => {
      let e = t.config.stillFrames;
      null != e && Object.entries(e).forEach(e => {
        let [t, n] = e;
        if (null != n) {
          if ("" !== n.src && null != n.src && ("" === n.base64 || null == n.base64)) D(e => A(y({}, e), {
            [t]: n
          }));
          else if ("" !== n.base64 && null != n.base64) {
            let e = (0, x.fB)(n.base64);
            n.src = e, M.current.push(e), D(e => A(y({}, e), {
              [t]: n
            }))
          }
        }
      })
    }, [t.config.stillFrames]);
    let W = {
        effect: t,
        upsertConfig: n
      },
      H = l.useRef(W);
    return (l.useEffect(() => {
      H.current = W
    }), l.useEffect(() => {
      let {
        effect: e,
        upsertConfig: t
      } = H.current;
      e.readonly || t({
        skuId: e.skuId,
        name: L,
        config: {
          effects: P,
          stillFrames: R
        }
      })
    }, [P, R, L]), l.useEffect(() => () => {
      M.current.forEach(e => {
        URL.revokeObjectURL(e)
      }), M.current = []
    }, []), null == r) ? (0, a.jsx)("div", {}) : (0, a.jsxs)("div", {
      className: f.zr,
      children: [(0, a.jsxs)("div", {
        style: {
          display: "none"
        },
        children: [(0, a.jsx)(u.A, {
          ref: e => {
            O.current.animated = e
          },
          onChange: e => {
            let t = F(e);
            null != t && (0, x.Mz)(t, async e => {
              let n = await (0, x.Ay)(e, t, P.length);
              k(e => [...e, n])
            })
          },
          multiple: false
        }), (0, a.jsx)(u.A, {
          ref: e => {
            O.current.thumbnail = e
          },
          onChange: e => V(x.qH.THUMBNAIL, e),
          multiple: false
        }), (0, a.jsx)(u.A, {
          ref: e => {
            O.current.static = e
          },
          onChange: e => V(x.qH.STATIC, e),
          multiple: false
        }), (0, a.jsx)(u.A, {
          ref: e => {
            O.current.reducedMotion = e
          },
          onChange: e => V(x.qH.REDUCED_MOTION, e),
          multiple: false
        })]
      }), (0, a.jsxs)("div", {
        className: f.Vg,
        children: [(0, a.jsxs)("div", {
          className: i()(f.nz, f.VH),
          children: [(0, a.jsx)("img", {
            src: T ? b : v,
            alt: "",
            width: 450
          }), j && (0, a.jsx)("div", {
            className: f.KJ,
            children: (0, a.jsx)(g.A, {
              config: G
            })
          })]
        }), (0, a.jsxs)("div", {
          className: f.nz,
          children: [(0, a.jsxs)("div", {
            className: i()(f.nz, f.uW),
            children: [(0, a.jsx)(c.Text, {
              variant: "text-md/normal",
              children: "Profile Effect Name"
            }), (0, a.jsx)("input", {
              type: "text",
              value: L,
              className: f.hF,
              onChange: e => {
                U(e.target.value)
              }
            })]
          }), (0, a.jsxs)("div", {
            className: f.Vg,
            children: [(0, a.jsxs)("div", {
              className: f.nM,
              children: [(0, a.jsx)(c.Text, {
                variant: "text-md/normal",
                children: "Dark Theme"
              }), (0, a.jsx)("input", {
                type: "checkbox",
                checked: T,
                className: f.OO,
                onChange: () => {
                  N(!T)
                }
              })]
            }), (0, a.jsxs)("div", {
              className: f.nM,
              children: [(0, a.jsx)(c.Text, {
                variant: "text-md/normal",
                children: "Show User Profile"
              }), (0, a.jsx)("input", {
                type: "checkbox",
                checked: w,
                className: f.OO,
                onChange: () => {
                  I(!w)
                }
              })]
            })]
          }), (0, a.jsxs)("div", {
            className: f.nM,
            children: [(0, a.jsx)(c.Button, {
              variant: "active",
              text: "Upload Animated Layer",
              onClick: () => {
                var e;
                return null == (e = O.current.animated) ? true : e.activateUploadDialogue()
              }
            }), (0, a.jsx)(c.Text, {
              variant: "text-sm/semibold",
              children: "Make sure to upload the bottommost layer first!"
            })]
          }), (0, a.jsxs)("div", {
            className: f.nM,
            children: [(0, a.jsx)(c.Button, {
              variant: "active",
              text: "Upload thumbnail.png",
              onClick: () => {
                var e;
                return null == (e = O.current.thumbnail) ? true : e.activateUploadDialogue()
              }
            }), (0, a.jsx)(c.Button, {
              variant: "active",
              text: "Upload static.png",
              onClick: () => {
                var e;
                return null == (e = O.current.static) ? true : e.activateUploadDialogue()
              }
            }), (0, a.jsx)(c.Button, {
              variant: "active",
              text: "Upload reduced_motion.png",
              onClick: () => {
                var e;
                return null == (e = O.current.reducedMotion) ? true : e.activateUploadDialogue()
              }
            })]
          }), (0, a.jsx)("div", {
            className: f.q6,
            children: (0, a.jsx)("div", {
              className: f.nM,
              children: (0, a.jsx)(c.Button, {
                variant: "primary",
                text: "Replay Animation",
                onClick: () => {
                  _(false), setTimeout(() => _(true), 100)
                }
              })
            })
          }), (0, a.jsxs)("div", {
            className: i()(f.q6, f.XA),
            children: [(0, a.jsx)(c.Text, {
              variant: "text-sm/semibold",
              children: "Please download both configs for the drop package!"
            }), (0, a.jsx)(c.Text, {
              variant: "text-sm/bold",
              color: "text-feedback-critical",
              children: "WARNING: The full config is really big :0"
            }), (0, a.jsxs)("div", {
              className: f.nM,
              children: [(0, a.jsx)(d.A, {
                fileContents: () => (0, x.rs)(P),
                contentType: "text/plain",
                fileName: "".concat(B, "_timing_config.txt"),
                children: (0, a.jsx)(c.Button, {
                  variant: "primary",
                  size: "sm",
                  text: "Download Timing Config"
                })
              }), (0, a.jsx)(d.A, {
                fileContents: () => JSON.stringify(A(y({}, t), {
                  name: L,
                  readonly: false,
                  config: A(y({}, t.config), {
                    effects: P,
                    stillFrames: R
                  })
                })),
                contentType: "text/plain",
                fileName: "".concat(B, "_config.txt"),
                children: (0, a.jsx)(c.Button, {
                  variant: "primary",
                  size: "sm",
                  text: "Download Full Config"
                })
              })]
            })]
          }), (0, a.jsxs)("div", {
            className: f.uW,
            children: [(0, a.jsx)(c.Heading, {
              variant: "heading-lg/bold",
              children: "Still Frames"
            }), (0, a.jsx)("div", {
              className: f.mv,
              children: Object.entries(R).map(e => {
                let [t, n] = e;
                return (0, a.jsx)(E, {
                  type: t,
                  frame: n,
                  showDarkTheme: T,
                  onClear: () => {
                    D(e => A(y({}, e), {
                      [t]: null
                    }))
                  }
                }, t)
              })
            })]
          }), P.some(e => {
            var t;
            return (null != (t = e.randomizedSources) ? t : []).length > 0
          }) && (0, a.jsxs)("div", {
            className: i()(f.uW, f.l7),
            children: [(0, a.jsx)(c.Text, {
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
            children: w && (0, a.jsxs)("div", {
              className: i()(f.p6, f.VH),
              children: [(0, a.jsx)(m.A, {
                user: r,
                pendingAvatar: true,
                pendingProfileEffect: null,
                canUsePremiumCustomization: true,
                isTryItOut: true
              }), (0, a.jsx)(g.A, {
                config: G
              })]
            })
          })]
        }), (0, a.jsxs)("div", {
          className: i()(f.Vg, f.ZF),
          children: [(0, a.jsx)("div", {
            className: f.cD,
            children: (0, a.jsx)(c.Button, {
              variant: "critical-secondary",
              text: "Clear Assets",
              onClick: () => {
                k([]), D(C)
              }
            })
          }), P.map((e, t) => (0, a.jsxs)("div", {
            className: f.ec,
            children: [(0, a.jsxs)("div", {
              className: f.D1,
              children: [(0, a.jsx)(c.Heading, {
                variant: "heading-md/bold",
                children: e.name
              }), (0, a.jsx)("img", {
                src: e.src,
                className: f.oq,
                alt: ""
              }), null != e.randomizedSources && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(c.Heading, {
                  variant: "heading-md/bold",
                  children: "Alternatives"
                }), e.randomizedSources.map((e, t) => {
                  var n;
                  return (0, a.jsxs)("div", {
                    children: [null != e.filename && (0, a.jsx)(c.Heading, {
                      variant: "heading-sm/semibold",
                      children: e.filename
                    }), (0, a.jsx)("img", {
                      src: e.src,
                      className: f.oq,
                      alt: ""
                    })]
                  }, null != (n = e.filename) ? n : "randomized-".concat(t))
                })]
              })]
            }), (0, a.jsxs)("div", {
              className: i()(f.Vg, f.uW),
              children: [(0, a.jsxs)("div", {
                className: f.nz,
                children: [(0, a.jsx)(c.Text, {
                  variant: "text-md/bold",
                  children: "Start"
                }), (0, a.jsx)("input", {
                  type: "number",
                  value: e.start,
                  className: f.hF,
                  onChange: e => {
                    k(n => {
                      let a = [...n],
                        l = n[t];
                      return l.start = +e.target.value, a[t] = l, a
                    })
                  },
                  contentEditable: true
                })]
              }), (0, a.jsxs)("div", {
                className: f.nz,
                children: [(0, a.jsx)(c.Text, {
                  variant: "text-md/bold",
                  children: "Duration"
                }), (0, a.jsx)("input", {
                  type: "number",
                  value: e.duration,
                  className: f.hF,
                  onChange: e => {
                    k(n => {
                      let a = [...n],
                        l = n[t];
                      return l.duration = +e.target.value, a[t] = l, a
                    })
                  },
                  contentEditable: true
                })]
              })]
            }), (0, a.jsxs)("div", {
              className: i()(f.Vg, f.uW),
              children: [(0, a.jsxs)("div", {
                className: f.nz,
                children: [(0, a.jsx)(c.Text, {
                  variant: "text-md/bold",
                  children: "Loop"
                }), (0, a.jsx)("input", {
                  type: "checkbox",
                  checked: e.loop,
                  className: f.OO,
                  onChange: e => {
                    k(n => {
                      let a = [...n],
                        l = n[t];
                      return l.loop = e.target.checked, a[t] = l, a
                    })
                  }
                })]
              }), (0, a.jsx)("div", {
                className: f.nz,
                children: e.loop && (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(c.Text, {
                    variant: "text-md/bold",
                    children: "Loop Delay"
                  }), (0, a.jsx)("input", {
                    type: "number",
                    value: e.loopDelay,
                    className: f.hF,
                    onChange: e => {
                      k(n => {
                        let a = [...n],
                          l = n[t];
                        return l.loopDelay = +e.target.value, a[t] = l, a
                      })
                    },
                    contentEditable: true
                  })]
                })
              })]
            }), (0, a.jsx)("div", {
              style: {
                display: "none"
              },
              children: (0, a.jsx)(u.A, {
                ref: e => {
                  O.current["randomized-".concat(t)] = e
                },
                onChange: e => {
                  let n;
                  null != (n = F(e)) && (0, x.Mz)(n, e => {
                    k(a => {
                      let l = [...a],
                        r = a[t];
                      if (null == r) return a;
                      let i = y({}, r);
                      return null == i.randomizedSources && (i.randomizedSources = []), i.randomizedSources.push({
                        src: e,
                        filename: n.name
                      }), l[t] = i, l
                    })
                  })
                },
                multiple: false
              })
            }), (0, a.jsxs)("div", {
              className: i()(f.nM, f._N),
              children: [(0, a.jsx)(c.Button, {
                variant: "secondary",
                text: "Add Alternative",
                onClick: () => {
                  var e;
                  return null == (e = O.current["randomized-".concat(t)]) ? true : e.activateUploadDialogue()
                }
              }), (0, a.jsx)(c.Button, {
                variant: "critical-secondary",
                text: "Remove Layer",
                onClick: () => {
                  k(t => t.filter(t => t !== e))
                }
              })]
            })]
          }, t))]
        })]
      })]
    })
  }