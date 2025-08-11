/** Chunk was on 75708 **/
/** chunk id: 782691, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./539854.js"), require("./49124.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
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
  Chunk662583 = require("./662583.js"),
  Chunk346537 = require("./346537.js"),
  Chunk830318 = require("./830318.js");

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = {
    [Chunk489495.cq.THUMBNAIL]: null,
    [Chunk489495.cq.STATIC]: null,
    [Chunk489495.cq.REDUCED_MOTION]: null
  },
  v = "debug",
  S = e => {
    let {
      effect: t
    } = e, {
      upsertConfig: n
    } = (0, h.n6)(), s = (0, o.e7)([g.default], () => g.default.getCurrentUser()), [S, T] = r.useState(true), I = r.useRef(null), [N, y] = r.useState(false), [A, P] = r.useState(false), [R, D] = r.useState([]), [Z, w] = r.useState(O), k = r.useRef([]), [L, M] = r.useState(t.name), B = L.toLowerCase().replace(/\s+/g, "_"), U = r.useMemo(() => ({
      type: l.Z.PROFILE_EFFECT,
      id: v,
      skuId: v,
      title: v,
      description: v,
      accessibilityLabel: v,
      reducedMotionSrc: "",
      effects: R,
      animationType: 0
    }), [R]), V = e => {
      let t = e.currentTarget.files;
      return null == t ? null : t[0]
    }, G = (e, t) => {
      let n = V(t);
      null != n && (0, f.i0)(n, t => {
        w(i => C(E({}, i), {
          [e]: (0, f.z)(t, n)
        }))
      })
    }, F = (e, t) => {
      let n = V(e);
      null != n && (0, f.i0)(n, e => {
        D(i => {
          let r = [...i],
            s = i[t];
          if (null == s) return i;
          let a = E({}, s);
          return null == a.randomizedSources && (a.randomizedSources = []), a.randomizedSources.push({
            src: e,
            filename: n.name
          }), r[t] = a, r
        })
      })
    }, H = e => {
      w(t => C(E({}, t), {
        [e]: null
      }))
    };
    r.useEffect(() => {
      let e = t.config.effects;
      e.length > 0 && D([...e].map(e => {
        if (null != e.base64) {
          let t = (0, f.$j)(e.base64);
          e.src = t, k.current.push(t)
        }
        return e
      }))
    }, [t.config.effects]), r.useEffect(() => {
      let e = t.config.stillFrames;
      null != e && Object.entries(e).forEach(e => {
        let [t, n] = e;
        if (null != n) {
          let e = (0, f.$j)(n.base64);
          n.src = e, k.current.push(e), w(e => C(E({}, e), {
            [t]: n
          }))
        }
      })
    }, [t.config.stillFrames]);
    let z = {
        effect: t,
        upsertConfig: n
      },
      W = r.useRef(z);
    return (r.useEffect(() => {
      W.current = z
    }), r.useEffect(() => {
      let {
        effect: e,
        upsertConfig: t
      } = W.current;
      e.readonly || t({
        id: e.id,
        name: L,
        config: {
          effects: R,
          stillFrames: Z
        }
      })
    }, [R, Z, L]), r.useEffect(() => () => {
      k.current.forEach(e => {
        URL.revokeObjectURL(e)
      }), k.current = []
    }, []), null == s) ? <div /> : <div className={x.root}><div className={x.grid}>{<div className={a()(x.col, x.preview)}>{<img src={N ? _ : j} alt={""} width={450} />}{S && <b.Z config={U} />}</div>}{<div className={x.col}>{<div className={a()(x.col, x.section)}>{<d.Text variant={"text-md/normal"}>{"Profile Effect Name"}</d.Text>}{<input type={"text"} value={L} className={x.input} onChange={e => {
                M(e.target.value)
              }} />}</div>}{<div className={x.grid}>{<div className={x.row}>{<d.Text variant={"text-md/normal"}>{"Dark Theme"}</d.Text>}{<input type={"checkbox"} checked={N} className={x.checkBox} onChange={() => {
                  y(!N)
                }} />}</div>}{<div className={x.row}>{<d.Text variant={"text-md/normal"}>{"Show User Profile"}</d.Text>}{<input type={"checkbox"} checked={A} className={x.checkBox} onChange={() => {
                  P(!A)
                }} />}</div>}</div>}{<div className={x.row}>{<c.zx color={c.Tt.GREEN}>{"Upload Animated Layer"}{<m.Z ref={I} onChange={e => {
                  let t = V(e);
                  null != t && (0, f.i0)(t, async e => {
                    let n = await (0, f.Xv)(e, t, R.length);
                    D(e => [...e, n])
                  })
                }} multiple={false} />}</c.zx>}{<d.Text variant={"text-sm/semibold"}>{"Make sure to upload the bottommost layer first!"}</d.Text>}</div>}{<div className={x.row}>{<c.zx color={c.Tt.GREEN}>{"Upload thumbnail.png"}{<m.Z ref={I} onChange={e => G(f.cq.THUMBNAIL, e)} multiple={false} />}</c.zx>}{<c.zx color={c.Tt.GREEN}>{"Upload static.png"}{<m.Z ref={I} onChange={e => G(f.cq.STATIC, e)} multiple={false} />}</c.zx>}{<c.zx color={c.Tt.GREEN}>{"Upload reduced_motion.png"}{<m.Z ref={I} onChange={e => G(f.cq.REDUCED_MOTION, e)} multiple={false} />}</c.zx>}</div>}{<div className={x.bottomControls}><div className={x.row}><d.zxk variant={"primary"} text={"Replay Animation"} onClick={() => {
                  T(false), setTimeout(() => T(true), 100)
                }} /></div></div>}{<div className={a()(x.bottomControls, x.shareSection)}>{<d.Text variant={"text-sm/semibold"}>{"Please download both configs for the drop package!"}</d.Text>}{<d.Text variant={"text-sm/bold"} color={"text-danger"}>{"WARNING: The full config is really big :0"}</d.Text>}{<div className={x.row}>{<u.Z fileContents={() => (0, f.yR)(R)} contentType={"text/plain"} fileName={"".concat(B, "_timing_config.txt")}><d.zxk variant={"primary"} size={"sm"} text={"Download Timing Config"} /></u.Z>}{<u.Z fileContents={() => JSON.stringify(C(E({}, t), {
                  name: L,
                  config: C(E({}, t.config), {
                    effects: R,
                    stillFrames: Z
                  })
                }))} contentType={"text/plain"} fileName={"".concat(B, "_config.txt")}><d.zxk variant={"primary"} size={"sm"} text={"Download Full Config"} /></u.Z>}</div>}</div>}{<div className={x.section}>{<d.X6q variant={"heading-lg/bold"}>{"Still Frames"}</d.X6q>}{<div className={x.stillFramesContainer}>{Object.entries(Z).map(e => {
                let [t, n] = e;
                return (0, i.jsxs)("div", {
                  className: x.stillFramePreviewContainer,
                  children: [(0, i.jsx)(d.X6q, {
                    variant: "heading-sm/bold",
                    children: t
                  }), (0, i.jsx)("img", {
                    src: null == n ? true : n.src,
                    className: x.stillFramePreview,
                    alt: ""
                  }), null != n && (0, i.jsx)(c.zx, {
                    size: c.Ph.TINY,
                    color: c.Tt.RED,
                    look: c.iL.OUTLINED,
                    onClick: () => H(t),
                    children: "Clear"
                  })]
                }, t)
              })}</div>}</div>}{R.some(e => {
            var t;
            return (null != (t = e.randomizedSources) ? t : []).length > 0
          }) && <div className={a()(x.section, x.randomizedRules)}>{<d.Text variant={"text-md/bold"}>{"Rules of Randomized Effects"}</d.Text>}{<ol>{<li>{"When an effect has randomization, all layers with random options must have the same number of options."}</li>}{<li>{"The duration for the random options of a layer must be the same"}</li>}{<li>{"If multiple layers have randomization, the same option will be used for all layers. (For example, the second option will be used for ALL layers)"}</li>}{<li>{'Click "Replay Animation" to "reroll" the randomization'}</li>}</ol>}</div>}{<div>{A && (0, i.jsxs)("div", {
              className: a()(x.userProfilePreview, x.preview),
              children: [(0, i.jsx)(p.Z, {
                user: s,
                pendingAvatar: true,
                pendingProfileEffectId: null,
                canUsePremiumCustomization: true,
                isTryItOutFlow: true
              }), (0, i.jsx)(b.Z, {
                config: U
              })]
            })}</div>}</div>}{<div className={a()(x.grid, x.layers)}>{<div className={x.dangerControls}><d.zxk variant={"critical-secondary"} text={"Clear Assets"} onClick={() => {
                D([]), w(O)
              }} /></div>}{R.map((e, t) => <div className={x.layerForm}>{<div className={x.layerPreviewContainer}>{<d.X6q variant={"heading-md/bold"}>{e.name}</d.X6q>}{<img src={e.src} className={x.layerPreview} alt={""} />}{null != e.randomizedSources && <i.Fragment>{<d.X6q variant={"heading-md/bold"}>{"Alternatives"}</d.X6q>}{e.randomizedSources.map((e, t) => {
                  var n;
                  return <div>{null != e.filename && <d.X6q variant={"heading-sm/semibold"}>{e.filename}</d.X6q>}{<img src={e.src} className={x.layerPreview} alt={""} />}</div>
                })}</i.Fragment>}</div>}{<div className={a()(x.grid, x.section)}>{<div className={x.col}>{<d.Text variant={"text-md/bold"}>{"Start"}</d.Text>}{<input type={"number"} value={e.start} className={x.input} onChange={e => {
                    D(n => {
                      let i = [...n],
                        r = n[t];
                      return r.start = +e.target.value, i[t] = r, i
                    })
                  }} contentEditable={true} />}</div>}{<div className={x.col}>{<d.Text variant={"text-md/bold"}>{"Duration"}</d.Text>}{<input type={"number"} value={e.duration} className={x.input} onChange={e => {
                    D(n => {
                      let i = [...n],
                        r = n[t];
                      return r.duration = +e.target.value, i[t] = r, i
                    })
                  }} contentEditable={true} />}</div>}</div>}{<div className={a()(x.grid, x.section)}>{<div className={x.col}>{<d.Text variant={"text-md/bold"}>{"Loop"}</d.Text>}{<input type={"checkbox"} checked={e.loop} className={x.checkBox} onChange={e => {
                    D(n => {
                      let i = [...n],
                        r = n[t];
                      return r.loop = e.target.checked, i[t] = r, i
                    })
                  }} />}</div>}{<div className={x.col}>{e.loop && (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(d.Text, {
                    variant: "text-md/bold",
                    children: "Loop Delay"
                  }), (0, i.jsx)("input", {
                    type: "number",
                    value: e.loopDelay,
                    className: x.input,
                    onChange: e => {
                      D(n => {
                        let i = [...n],
                          r = n[t];
                        return r.loopDelay = +e.target.value, i[t] = r, i
                      })
                    },
                    contentEditable: true
                  })]
                })}</div>}</div>}{<div className={a()(x.row, x.end)}>{<div className={x.uploadButton}>{<d.Text variant={"text-sm/normal"} color={"always-white"}>{"Add Alternative"}</d.Text>}{<m.Z ref={I} onChange={e => F(e, t)} multiple={false} />}</div>}{<d.zxk variant={"critical-secondary"} text={"Remove Layer"} onClick={() => {
                  D(t => t.filter(t => t !== e))
                }} />}</div>}</div>)}</div>}</div></div>
  }