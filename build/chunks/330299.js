/** Chunk was on 39048 **/
/** chunk id: 330299, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  M: () => o,
  d: () => c
}), require("./896048.js"), require("./321073.js"), require("./747238.js"), require("./733351.js"), require("./142703.js");
var Chunk64700 = require("./64700.js"),
  Chunk812729 = require("./812729.js"),
  l = require.n(Chunk812729),
  Chunk340287 = require("./340287.js"),
  Chunk530552 = require("./530552.js");

function o(e) {
  let [t, n] = r.useState([e]), [i, s] = r.useState(0), a = r.useMemo(() => t[i], [t, i]), o = r.useCallback(e => {
    let r = e(a);
    if (l()(a, r)) return;
    let o = t.slice(0, i + 1);
    o.push(r), n(o), s(o.length - 1)
  }, [i, a, t]);
  return {
    state: a,
    setState: o,
    goBack: r.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 1,
        n = Math.max(0, i - e);
      return s(n), t[n]
    }, [i, t]),
    goForward: r.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 1,
        n = Math.min(t.length - 1, i + e);
      return s(n), t[n]
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
    goForward: m
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
  let p = r.useCallback(e => {
      var t, r;
      let i = (null != (t = e.clipboardData.getData("text")) ? t : "").split(a.ay).map(e => e.trim()).filter(e => e.length > 0);
      i.length <= 1 || ((0, s.flushSync)(() => {
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
      }), e.preventDefault(), e.stopPropagation(), null == (r = n.current) || r.scrollToBottom())
    }, [u, n]),
    f = r.useCallback(e => {
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
    h = r.useCallback(e => t => {
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
    b = r.useCallback(e => {
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
          isSelecting: s
        } = n;
        return {
          value: i,
          tags: r,
          selections: t ? [] : l.filter(t => t !== r[e]),
          isSelecting: s
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
    _ = r.useCallback(e => {
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
      !(o.trim().length <= 0) && ((0, s.flushSync)(() => {
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
    v = r.useCallback(e => {
      let t = o.trim().length <= 0;
      if (d.length > 0) {
        var n;
        (0, s.flushSync)(() => {
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
      } else t && ((0, s.flushSync)(() => {
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
    y = r.useCallback(e => {
      var t, n, r, l;
      let s = e.metaKey || e.ctrlKey;
      "z" === e.key && s ? (g().selections.length > 0 ? null == (t = i.current) || t.blur() : null == (n = i.current) || n.focus(), e.preventDefault(), e.stopPropagation()) : "y" === e.key && s && (m().selections.length > 0 ? null == (r = i.current) || r.blur() : null == (l = i.current) || l.focus(), e.preventDefault(), e.stopPropagation())
    }, [g, m, i]),
    A = r.useCallback(e => {
      var t;
      let n = o.trim().length > 0,
        {
          selectionStart: r = 0,
          selectionEnd: a = 0
        } = null != (t = i.current) ? t : {};
      0 === c.length || n && r === a || ((0, s.flushSync)(() => {
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
    handlePasteEvent: p,
    handleInputChange: _,
    handleKeyDown: r.useCallback(e => {
      let t = e.metaKey || e.ctrlKey;
      "Meta" !== e.key && (a.Wu.has(e.key) ? O(e) : "Backspace" === e.key ? v(e) : "Escape" === e.key ? j(e) : "a" === e.key && t ? A(e) : a.A_.has(e.key) && t && y(e))
    }, [O, v, j, A, y]),
    handleContainerKeyUp: r.useCallback(e => {
      if (document.activeElement !== l.current) return;
      let t = e.metaKey || e.ctrlKey;
      "Backspace" === e.key ? v(e) : "a" === e.key && t ? A(e) : "Escape" === e.key ? j(e) : a.A_.has(e.key) && t ? y(e) : "Meta" !== e.key && j(e)
    }, [y, v, A, j, l]),
    handleRemoveTag: f,
    handleTagChangeEvent: h,
    handleSelectTag: b,
    handleUnselectTag: x,
    handleResetTagSelections: j,
    handleInputBlurEvent: E
  }
}