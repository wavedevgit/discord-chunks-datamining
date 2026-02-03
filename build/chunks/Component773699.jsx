/** Chunk was on 92869 **/
/** chunk id: 773699, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
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
let j = e => {
  let t, {
      commandType: n,
      commandTargetId: a,
      channel: j,
      guildId: A,
      onHeightUpdate: E,
      context: _,
      showIcon: T = false
    } = e,
    S = (0, l.bG)([b.A], () => b.A.getGuild(null != A ? A : j.guild_id)),
    w = (0, l.bG)([h.default], () => h.default.getUser(a)),
    I = (0, g.A)({
      user: w,
      guildId: null == S ? true : S.id,
      context: _
    }),
    P = r.useMemo(() => ({
      channel: j,
      type: "channel"
    }), [j]),
    {
      newUIEnabled: N,
      searchEnabled: C,
      desktopSendIconEnabled: R
    } = m.A.useConfig({
      location: "useAppsCommandItems"
    }),
    [k, G] = r.useState(""),
    D = "" !== k,
    {
      commands: M,
      commandsByActiveSection: K,
      sectionDescriptors: L,
      loading: U
    } = o.cu({
      context: P,
      filters: {
        text: D ? k : true,
        commandTypes: [n]
      },
      options: {
        limit: O.YC,
        includeFrecency: N && !D,
        scoreMethod: D ? u.M.COMMAND_OR_APPLICATION : true
      },
      allowFetch: true
    }),
    {
      sections: X
    } = r.useMemo(() => {
      let e = {};
      return L.forEach(t => {
        e[t.id] = t
      }), {
        sections: e
      }
    }, [L]),
    F = r.useRef(U);
  r.useEffect(() => {
    U !== F.current && (F.current = U, null == E || E())
  }, [U, E]);
  let V = r.useCallback((e, t) => {
      let {
        showAppIcon: n
      } = t;
      i()(null != j, "menu item should not show if channel is null");
      let r = X[e.applicationId],
        l = n && null != r ? (0, d.Rg)(r) : true,
        o = null != l && null != r ? e => {
          let {
            className: t
          } = e;
          return (0, s.jsx)("span", {
            className: t,
            children: (0, s.jsx)(l, {
              channel: j,
              section: r,
              width: 20,
              height: 20,
              selectable: false
            })
          })
        } : true;
      return (0, s.jsx)(c.Drp, {
        id: e.id,
        label: e.displayName,
        iconLeft: o,
        leadingAccessory: null != o ? {
          type: "icon",
          icon: o
        } : true,
        trailingIndicator: R ? {
          type: "icon",
          icon: c.lX7
        } : true,
        icon: R ? c.lX7 : true,
        action: () => {
          (0, p.A)({
            command: e,
            optionValues: {},
            context: {
              channel: j,
              guild: S
            },
            commandTargetId: a
          })
        }
      }, e.id)
    }, [j, X, R, S, a]),
    H = r.useCallback(e => {
      let {
        section: t,
        data: n
      } = e;
      return (0, s.jsx)(c.rXV, {
        label: x.intl.string(x.t.V0w2ap),
        children: n.map(e => V(e, {
          showAppIcon: true
        }))
      }, t.id)
    }, [V]),
    W = r.useCallback(e => {
      let {
        section: t,
        data: n
      } = e, r = (0, d.Rg)(t), a = null != r ? e => {
        let {
          className: n
        } = e;
        return (0, s.jsx)("span", {
          className: n,
          children: (0, s.jsx)(r, {
            channel: j,
            section: t,
            selectable: false,
            width: 20,
            height: 20
          })
        })
      } : true;
      return (0, s.jsx)(c.Drp, {
        id: t.id,
        label: t.name,
        iconLeft: a,
        leadingAccessory: null != a ? {
          type: "icon",
          icon: a
        } : true,
        children: n.map(e => V(e, {
          showAppIcon: false
        }))
      }, t.id)
    }, [j, V]),
    Y = (0, s.jsx)(c.aK1, {
      id: "command-search",
      control: (e, t) => {
        var n, r;
        return (0, s.jsx)(c.VPO, (n = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              s = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), s.forEach(function(t) {
              var s;
              s = n[t], t in e ? Object.defineProperty(e, t, {
                value: s,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = s
            })
          }
          return e
        }({}, e), r = r = {
          query: k,
          onChange: G,
          placeholder: x.intl.string(x.t.m1UwbP),
          ref: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            n.push.apply(n, s)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
        }), n))
      }
    }, "command-search");
  if (U) t = (0, s.jsx)(c.Drp, {
    id: "menu-commands-placeholder",
    render: () => (0, s.jsx)(f.A, {}),
    disabled: true
  }, "menu-commands-placeholder");
  else {
    if (0 === M.length) t = (0, s.jsxs)(s.Fragment, {
      children: [D && (0, s.jsxs)(s.Fragment, {
        children: [Y, (0, s.jsx)(c.bXX, {})]
      }), (0, s.jsx)(c.Drp, {
        id: "menu-commands-empty",
        label: x.intl.string(x.t.YSNlV2),
        disabled: true
      }, "menu-commands-empty")]
    });
    else if (N)
      if (D) t = (0, s.jsxs)(s.Fragment, {
        children: [Y, (0, s.jsx)(c.bXX, {}), M.map(e => V(e, {
          showAppIcon: true
        }))]
      });
      else {
        let e = K.find(e => {
            let {
              section: t
            } = e;
            return t.id === O.Ik.FRECENCY
          }),
          n = K.filter(e => {
            let {
              section: t
            } = e;
            return t.id !== O.Ik.FRECENCY
          });
        t = (0, s.jsxs)(s.Fragment, {
          children: [C && Y, null != e && H(e), (0, s.jsx)(c.rXV, {
            label: x.intl.string(x.t.PHjkRE),
            children: n.map(e => W(e))
          })]
        })
      }
    else t = M.map(e => V(e, {
      showAppIcon: true
    }));
    null != I && I.length > 0 && (t = (0, s.jsxs)(s.Fragment, {
      children: [t, (0, s.jsx)(c.bXX, {}, "separator"), I]
    }))
  }
  if (!y.kvI.TEXTUAL.has(j.type))
    if (null == I) return null;
    else t = I;
  return (0, s.jsx)(c.Drp, {
    id: "apps",
    label: x.intl.string(x.t.PHjkRE),
    icon: T ? c.k9F : true,
    leadingAccessory: T ? {
      type: "icon",
      icon: c.k9F
    } : true,
    listClassName: v.p,
    children: t
  })
}