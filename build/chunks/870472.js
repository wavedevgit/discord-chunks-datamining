/** Chunk was on 9536 **/
/** chunk id: 870472, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Q: () => c,
  V: () => o
}), require("./388685.js"), require("./539854.js"), require("./35282.js"), require("./781311.js"), require("./358797.js");
var Chunk473749 = require("./473749.js"),
  Chunk348327 = require("./348327.js"),
  l = require.n(Chunk348327),
  Chunk24156 = require("./24156.js"),
  Chunk596390 = require("./596390.js");

function o(e) {
  let [t, n] = r.useState([e]), [i, a] = r.useState(0), s = r.useMemo(() => t[i], [t, i]), o = r.useCallback(e => {
    let r = e(s);
    if (l()(s, r)) return;
    let o = t.slice(0, i + 1);
    o.push(r), n(o), a(o.length - 1)
  }, [i, s, t]);
  return {
    state: s,
    setState: o,
    goBack: r.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 1,
        n = Math.max(0, i - e);
      return a(n), t[n]
    }, [i, t]),
    goForward: r.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 1,
        n = Math.min(t.length - 1, i + e);
      return a(n), t[n]
    }, [i, t])
  }
}

function c(e, t) {
  let {
    scrollerRef: n,
    mainInputRef: i,
    mainContainerRef: l
  } = t, {
    state: {
      value: o,
      tags: c,
      selections: d
    },
    setState: u,
    goBack: g,
    goForward: f
  } = e;
  r.useLayoutEffect(() => {
    let e = e => t => {
        ("Meta" === t.key || "Control" === t.key) && u(t => {
          var n, r;
          return n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({}, t), r = r = {
            isSelecting: e
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }), n
        })
      },
      t = e(true),
      n = e(false);
    return document.addEventListener("keydown", t), document.addEventListener("keyup", n), () => {
      document.removeEventListener("keydown", t), document.removeEventListener("keyup", n)
    }
  }, [u]);
  let m = r.useCallback(e => {
      var t, r;
      let i = (null != (r = e.clipboardData.getData("text")) ? r : "").split(s.uz).map(e => e.trim()).filter(e => e.length > 0);
      i.length <= 1 || ((0, a.flushSync)(() => {
        u(e => {
          let {
            tags: t,
            value: n
          } = e;
          return {
            value: n,
            tags: [...t, ...i],
            selections: [],
            isSelecting: false
          }
        })
      }), e.preventDefault(), e.stopPropagation(), null == (t = n.current) || t.scrollToBottom())
    }, [u, n]),
    b = r.useCallback(e => {
      u(t => {
        let {
          tags: n,
          value: r
        } = t;
        return {
          value: r,
          tags: [...n.filter((t, n) => n !== e)],
          selections: [],
          isSelecting: false
        }
      })
    }, [u]),
    p = r.useCallback(e => t => {
      u(n => {
        let {
          tags: r,
          value: i
        } = n, l = [...r];
        return l[e] = t, {
          value: i,
          tags: l,
          selections: [],
          isSelecting: false
        }
      })
    }, [u]),
    h = r.useCallback(e => {
      u(t => {
        let {
          tags: n,
          value: r,
          selections: i,
          isSelecting: l
        } = t;
        return {
          value: r,
          tags: n,
          selections: [...i, n[e]],
          isSelecting: l
        }
      })
    }, [u]),
    x = r.useCallback(function(e) {
      let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
      u(n => {
        let {
          tags: r,
          value: i,
          selections: l,
          isSelecting: a
        } = n;
        return {
          value: i,
          tags: r,
          selections: t ? [] : l.filter(t => t !== r[e]),
          isSelecting: a
        }
      })
    }, [u]),
    j = r.useCallback(e => {
      var t;
      u(e => {
        let {
          tags: t,
          value: n
        } = e;
        return {
          value: n,
          tags: t,
          selections: [],
          isSelecting: false
        }
      }), null != e && (e.preventDefault(), e.stopPropagation()), null == (t = i.current) || t.focus()
    }, [i, u]),
    v = r.useCallback(e => {
      u(t => {
        let {
          tags: n
        } = t;
        return {
          value: e.target.value,
          tags: n,
          selections: [],
          isSelecting: false
        }
      })
    }, [u]),
    O = r.useCallback(function(e) {
      let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
        r = !(arguments.length > 2) || true === arguments[2] || arguments[2];
      !(o.trim().length <= 0) && ((0, a.flushSync)(() => {
        u(e => {
          let {
            tags: t
          } = e;
          return {
            value: "",
            tags: [...t, o],
            selections: [],
            isSelecting: false
          }
        })
      }), r && null != n.current && n.current.scrollToBottom(), t && (e.preventDefault(), e.stopPropagation()))
    }, [n, u, o]),
    y = r.useCallback(e => {
      let t = o.trim().length <= 0;
      if (d.length > 0) {
        var n;
        (0, a.flushSync)(() => {
          u(e => {
            let {
              tags: t,
              value: n,
              selections: r
            } = e;
            return {
              value: n,
              tags: t.filter(e => !r.includes(e)),
              selections: [],
              isSelecting: false
            }
          })
        }), null == (n = i.current) || n.focus(), e.preventDefault(), e.stopPropagation()
      } else t && ((0, a.flushSync)(() => {
        u(e => {
          let {
            tags: t
          } = e, n = [...t], r = n.pop();
          return {
            value: null != r ? r : "",
            tags: [...n],
            selections: [],
            isSelecting: false
          }
        })
      }), e.preventDefault(), e.stopPropagation())
    }, [i, d.length, u, o]),
    C = r.useCallback(e => {
      var t, n, r, l;
      let a = e.metaKey || e.ctrlKey;
      "z" === e.key && a ? (g().selections.length > 0 ? null == (t = i.current) || t.blur() : null == (n = i.current) || n.focus(), e.preventDefault(), e.stopPropagation()) : "y" === e.key && a && (f().selections.length > 0 ? null == (r = i.current) || r.blur() : null == (l = i.current) || l.focus(), e.preventDefault(), e.stopPropagation())
    }, [g, f, i]),
    N = r.useCallback(e => {
      var t;
      let n = o.trim().length > 0,
        {
          selectionStart: r = 0,
          selectionEnd: s = 0
        } = null != (t = i.current) ? t : {};
      0 === c.length || n && r === s || ((0, a.flushSync)(() => {
        u(e => {
          let {
            tags: t,
            value: n
          } = e;
          return {
            value: n,
            tags: t,
            selections: [...t],
            isSelecting: false
          }
        })
      }), setImmediate(() => {
        var e;
        null == (e = i.current) || e.blur(), setTimeout(() => {
          var e;
          null == (e = l.current) || e.focus()
        }, 16)
      }), e.preventDefault(), e.stopPropagation())
    }, [l, i, u, c.length, o]),
    E = r.useCallback(e => {
      e.relatedTarget !== e.currentTarget && O(e, false, false)
    }, [O]);
  return {
    handlePasteEvent: m,
    handleInputChange: v,
    handleKeyDown: r.useCallback(e => {
      let t = e.metaKey || e.ctrlKey;
      "Meta" !== e.key && (s.ye.has(e.key) ? O(e) : "Backspace" === e.key ? y(e) : "Escape" === e.key ? j(e) : "a" === e.key && t ? N(e) : s.Bd.has(e.key) && t && C(e))
    }, [O, y, j, N, C]),
    handleContainerKeyUp: r.useCallback(e => {
      if (document.activeElement !== l.current) return;
      let t = e.metaKey || e.ctrlKey;
      "Backspace" === e.key ? y(e) : "a" === e.key && t ? N(e) : "Escape" === e.key ? j(e) : s.Bd.has(e.key) && t ? C(e) : "Meta" !== e.key && j(e)
    }, [C, y, N, j, l]),
    handleRemoveTag: b,
    handleTagChangeEvent: p,
    handleSelectTag: h,
    handleUnselectTag: x,
    handleResetTagSelections: j,
    handleInputBlurEvent: E
  }
}