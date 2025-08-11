/** Chunk was on 87597 **/
/** chunk id: 926302, original params: e,n,t (module,exports,require) **/
require.a(module, async function(e, r) {
  try {
    t.d(n, {
      Kq: () => _,
      ZP: () => a
    });
    var o = t(255367),
      i = t(31675),
      u = t(73800),
      c = e([i]);
    i = (c.then ? (await c)() : c)[0];
    let d = (0, u.createContext)(null);

    function _() {
      return (0, u.useContext)(d)
    }
    let s = new Set(["bold", "italic", "underline", "strikethrough", "spoiler", "emoji", "timestamp", "mention", "link", "code", "code_block", "heading", "list", "quote", "small"]);

    function l({
      node: e,
      renderers: n,
      ...t
    }) {
      let r = n[e.type];
      if (! function(e, n) {
          if (null == e) throw Error(`Attempted to render "${n}" but no renderer was provided`)
        }(r, e.type), Array.isArray(e.value)) return <r node={e}> {...t}</r>;
      switch (e.type) {
        case "mention":
        case "timestamp":
        case "emoji":
        case "code_block":
          return <r node={e}> {...e.value} {...t}</r>;
        case "link": {
          let i = e.value,
            u = null;
          if ("normal" === i.type) {
            let {
              value: {
                text: e,
                url: t
              }
            } = i;
            u = e ? <f nodes={e} renderers={n} /> : t
          }
          return <r node={e}> {...e.value} {...t}</r>
        }
        case "text":
        case "code":
          return <r node={e}> {...t}</r>;
        case "heading":
          return <r node={e} level={e.value.level}> {...t}</r>;
        case "list": {
          let i = n.listItem ?? "li";
          return <r node={e}> {...e.value} {...t}</r>
        }
        case "empty":
          return <r> {...t}</r>;
        case "small":
          return <r node={e}> {...t}</r>;
        default:
          throw TypeError(`Unknown node type "${e.type}"`)
      }
    }

    function f({
      nodes: e,
      renderers: n
    }) {
      return <o.Fragment>{e.map((t, r) => (0, o.jsx)(l, {
          node: t,
          renderers: n,
          siblings: e,
          index: r
        }, r))}</o.Fragment>
    }

    function a({
      content: e,
      renderers: n
    }) {
      let t = (0, u.useMemo)(() => {
          let e = Object.keys(n).filter(e => s.has(e));
          return e.length > 0 ? e : null
        }, [n]),
        r = (0, u.useMemo)(() => (0, i.Q)(e, t), [e, t]);
      return <d.Provider value={r}><f nodes={r} renderers={n} /></d.Provider>
    }
    r()
  } catch (e) {
    r(e)
  }
})