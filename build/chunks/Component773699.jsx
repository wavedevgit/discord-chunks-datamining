/** Chunk was on 33818 **/
/** chunk id: 773699, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk842209 = require("./842209.js"),
  Chunk210978 = require("./210978.js"),
  Chunk545152 = require("./545152.js"),
  Chunk664929 = require("./664929.js"),
  Chunk700210 = require("./700210.jsx"),
  Chunk718676 = require("./718676.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk822517 = require("./822517.js"),
  Chunk652215 = require("./652215.js"),
  Chunk73510 = require("./73510.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk329872 = require("./329872.js");
let v = e => {
  let t, {
      commandType: n,
      commandTargetId: i,
      channel: v,
      guildId: w,
      onHeightUpdate: x,
      context: E
    } = e,
    P = (0, a.bG)([y.A], () => y.A.getGuild(null != w ? w : v.guild_id)),
    S = (0, a.bG)([g.default], () => g.default.getUser(i)),
    C = (0, b.A)({
      user: S,
      guildId: null == P ? true : P.id,
      context: E
    }),
    I = l.useMemo(() => ({
      channel: v,
      type: "channel"
    }), [v]),
    {
      newUIEnabled: D,
      searchEnabled: k
    } = m.A.useConfig({
      location: "useAppsCommandItems"
    }),
    [V, R] = l.useState(""),
    F = "" !== V,
    {
      commands: L,
      commandsByActiveSection: M,
      sectionDescriptors: N,
      loading: X
    } = s.cu({
      context: I,
      filters: {
        text: F ? V : true,
        commandTypes: [n]
      },
      options: {
        limit: O.YC,
        includeFrecency: D && !F,
        scoreMethod: F ? d.M.COMMAND_OR_APPLICATION : true
      },
      allowFetch: true
    }),
    {
      sections: T
    } = l.useMemo(() => {
      let e = {};
      return N.forEach(t => {
        e[t.id] = t
      }), {
        sections: e
      }
    }, [N]),
    U = l.useRef(X);
  l.useEffect(() => {
    X !== U.current && (U.current = X, null == x || x())
  }, [X, x]);
  let G = l.useCallback((e, t) => {
      let {
        showAppIcon: n
      } = t;
      o()(null != v, "menu item should not show if channel is null");
      let l = T[e.applicationId],
        a = n && null != l ? (0, p.Rg)(l) : true,
        s = null != a && null != l ? e => {
          let {
            className: t
          } = e;
          return (0, r.jsx)("span", {
            className: t,
            children: (0, r.jsx)(a, {
              channel: v,
              section: l,
              width: 20,
              height: 20,
              selectable: false
            })
          })
        } : true;
      return (0, r.jsx)(c.Drp, {
        id: e.id,
        label: e.displayName,
        iconLeft: s,
        leadingAccessory: null != s ? {
          type: "icon",
          icon: s
        } : true,
        trailingIndicator: D ? {
          type: "icon",
          icon: c.lX7
        } : true,
        icon: D ? c.lX7 : true,
        action: () => {
          (0, u.A)({
            command: e,
            optionValues: {},
            context: {
              channel: v,
              guild: P
            },
            commandTargetId: i
          })
        }
      }, e.id)
    }, [v, T, D, P, i]),
    _ = l.useCallback(e => {
      let {
        section: t,
        data: n
      } = e;
      return (0, r.jsx)(c.rXV, {
        label: j.intl.string(j.t.V0w2ap),
        children: n.map(e => G(e, {
          showAppIcon: true
        }))
      }, t.id)
    }, [G]),
    H = l.useCallback(e => {
      let {
        section: t,
        data: n
      } = e, l = (0, p.Rg)(t), i = null != l ? e => {
        let {
          className: n
        } = e;
        return (0, r.jsx)("span", {
          className: n,
          children: (0, r.jsx)(l, {
            channel: v,
            section: t,
            selectable: false,
            width: 20,
            height: 20
          })
        })
      } : true;
      return (0, r.jsx)(c.Drp, {
        id: t.id,
        label: t.name,
        iconLeft: i,
        leadingAccessory: null != i ? {
          type: "icon",
          icon: i
        } : true,
        children: n.map(e => G(e, {
          showAppIcon: false
        }))
      }, t.id)
    }, [v, G]),
    B = (0, r.jsx)(c.aK1, {
      id: "command-search",
      control: (e, t) => {
        var n, l;
        return (0, r.jsx)(c.VPO, (n = function(e) {
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
        }({}, e), l = l = {
          query: V,
          onChange: R,
          placeholder: j.intl.string(j.t.m1UwbP),
          ref: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
        }), n))
      }
    }, "command-search");
  if (X) t = (0, r.jsx)(c.Drp, {
    id: "menu-commands-placeholder",
    render: () => (0, r.jsx)(f.A, {}),
    disabled: true
  }, "menu-commands-placeholder");
  else {
    if (0 === L.length) t = (0, r.jsxs)(r.Fragment, {
      children: [F && (0, r.jsxs)(r.Fragment, {
        children: [B, (0, r.jsx)(c.bXX, {})]
      }), (0, r.jsx)(c.Drp, {
        id: "menu-commands-empty",
        label: j.intl.string(j.t.YSNlV2),
        disabled: true
      }, "menu-commands-empty")]
    });
    else if (D)
      if (F) t = (0, r.jsxs)(r.Fragment, {
        children: [B, (0, r.jsx)(c.bXX, {}), L.map(e => G(e, {
          showAppIcon: true
        }))]
      });
      else {
        let e = M.find(e => {
            let {
              section: t
            } = e;
            return t.id === O.Ik.FRECENCY
          }),
          n = M.filter(e => {
            let {
              section: t
            } = e;
            return t.id !== O.Ik.FRECENCY
          });
        t = (0, r.jsxs)(r.Fragment, {
          children: [k && B, null != e && _(e), (0, r.jsx)(c.rXV, {
            label: j.intl.string(j.t.PHjkRE),
            children: n.map(e => H(e))
          })]
        })
      }
    else t = L.map(e => G(e, {
      showAppIcon: true
    }));
    null != C && C.length > 0 && (t = (0, r.jsxs)(r.Fragment, {
      children: [t, (0, r.jsx)(c.bXX, {}, "separator"), C]
    }))
  }
  if (!h.kvI.TEXTUAL.has(v.type))
    if (null == C) return null;
    else t = C;
  return (0, r.jsx)(c.Drp, {
    id: "apps",
    label: j.intl.string(j.t.PHjkRE),
    leadingAccessory: {
      type: "icon",
      icon: c.k9F
    },
    listClassName: A.p,
    children: t
  })
}