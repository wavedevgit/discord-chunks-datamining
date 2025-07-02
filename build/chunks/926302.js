/** Chunk was on 85831 **/
t.a(e, async function(e, r) {
  try {
    t.d(n, {
      Kq: () => a,
      ZP: () => d
    });
    var l = t(255367),
      o = t(31675),
      i = t(73800),
      c = e([o]);
    o = (c.then ? (await c)() : c)[0];
    let f = (0, i.createContext)(null);

    function a() {
      return (0, i.useContext)(f)
    }
    let h = new Set(["bold", "italic", "underline", "strikethrough", "spoiler", "emoji", "timestamp", "mention", "link", "code", "code_block", "heading", "list", "quote", "small"]);

    function u({
      node: e,
      renderers: n,
      ...t
    }) {
      let r = n[e.type];
      if (! function(e, n) {
          if (null == e) throw Error(`Attempted to render "${n}" but no renderer was provided`)
        }(r, e.type), Array.isArray(e.value)) return (0, l.jsx)(r, {
        node: e,
        ...t,
        children: (0, l.jsx)(s, {
          nodes: e.value,
          renderers: n
        })
      });
      switch (e.type) {
        case "mention":
        case "timestamp":
        case "emoji":
        case "code_block":
          return (0, l.jsx)(r, {
            node: e,
            ...e.value,
            ...t
          });
        case "link": {
          let o = e.value,
            i = null;
          if ("normal" === o.type) {
            let {
              value: {
                text: e,
                url: t
              }
            } = o;
            i = e ? (0, l.jsx)(s, {
              nodes: e,
              renderers: n
            }) : t
          }
          return (0, l.jsx)(r, {
            node: e,
            ...e.value,
            ...t,
            children: i
          })
        }
        case "text":
        case "code":
          return (0, l.jsx)(r, {
            node: e,
            ...t,
            children: e.value
          });
        case "heading":
          return (0, l.jsx)(r, {
            node: e,
            level: e.value.level,
            ...t,
            children: (0, l.jsx)(s, {
              nodes: e.value.content,
              renderers: n
            })
          });
        case "list": {
          let o = n.listItem ?? "li";
          return (0, l.jsx)(r, {
            node: e,
            ...e.value,
            ...t,
            children: e.value.items.map((t, r) => (0, l.jsx)(o, {
              node: t,
              siblings: e.value.items,
              index: r,
              children: (0, l.jsx)(s, {
                nodes: t.content,
                renderers: n
              })
            }, r))
          })
        }
        case "empty":
          return (0, l.jsx)(r, {
            ...t
          });
        case "small":
          return (0, l.jsx)(r, {
            node: e,
            ...t,
            children: (0, l.jsx)(s, {
              nodes: e.value.content,
              renderers: n
            })
          });
        default:
          throw TypeError(`Unknown node type "${e.type}"`)
      }
    }

    function s({
      nodes: e,
      renderers: n
    }) {
      return (0, l.jsx)(l.Fragment, {
        children: e.map((t, r) => (0, l.jsx)(u, {
          node: t,
          renderers: n,
          siblings: e,
          index: r
        }, r))
      })
    }

    function d({
      content: e,
      renderers: n
    }) {
      let t = (0, i.useMemo)(() => {
          let e = Object.keys(n).filter(e => h.has(e));
          return e.length > 0 ? e : null
        }, [n]),
        r = (0, i.useMemo)(() => (0, o.Q)(e, t), [e, t]);
      return (0, l.jsx)(f.Provider, {
        value: r,
        children: (0, l.jsx)(s, {
          nodes: r,
          renderers: n
        })
      })
    }
    r()
  } catch (e) {
    r(e)
  }
})