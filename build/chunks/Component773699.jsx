/** Chunk was on 55150 **/
/** chunk id: 773699, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
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
  let n, {
      commandType: t,
      commandTargetId: i,
      channel: v,
      guildId: I,
      onHeightUpdate: E,
      context: R,
      showIcon: P = false
    } = e,
    _ = (0, a.bG)([h.A], () => h.A.getGuild(null != I ? I : v.guild_id)),
    x = (0, a.bG)([A.default], () => A.default.getUser(i)),
    C = (0, m.A)({
      user: x,
      guildId: null == _ ? true : _.id,
      context: R
    }),
    N = r.useMemo(() => ({
      channel: v,
      type: "channel"
    }), [v]),
    {
      newUIEnabled: w,
      searchEnabled: T
    } = b.A.useConfig({
      location: "useAppsCommandItems"
    }),
    [S, k] = r.useState(""),
    F = "" !== S,
    {
      commands: D,
      commandsByActiveSection: G,
      sectionDescriptors: V,
      loading: X
    } = o.cu({
      context: N,
      filters: {
        text: F ? S : true,
        commandTypes: [t]
      },
      options: {
        limit: j.YC,
        includeFrecency: w && !F,
        scoreMethod: F ? d.M.COMMAND_OR_APPLICATION : true
      },
      allowFetch: true
    }),
    {
      sections: Y
    } = r.useMemo(() => {
      let e = {};
      return V.forEach(n => {
        e[n.id] = n
      }), {
        sections: e
      }
    }, [V]),
    L = r.useRef(X);
  r.useEffect(() => {
    X !== L.current && (L.current = X, null == E || E())
  }, [X, E]);
  let M = r.useCallback((e, n) => {
      let {
        showAppIcon: t
      } = n;
      s()(null != v, "menu item should not show if channel is null");
      let r = Y[e.applicationId],
        a = t && null != r ? (0, p.Rg)(r) : true,
        o = null != a && null != r ? e => {
          let {
            className: n
          } = e;
          return (0, l.jsx)("span", {
            className: n,
            children: (0, l.jsx)(a, {
              channel: v,
              section: r,
              width: 20,
              height: 20,
              selectable: false
            })
          })
        } : true;
      return (0, l.jsx)(c.Drp, {
        id: e.id,
        label: e.displayName,
        iconLeft: o,
        leadingAccessory: null != o ? {
          type: "icon",
          icon: o
        } : true,
        trailingIndicator: w ? {
          type: "icon",
          icon: c.lX7
        } : true,
        icon: w ? c.lX7 : true,
        action: () => {
          (0, u.A)({
            command: e,
            optionValues: {},
            context: {
              channel: v,
              guild: _
            },
            commandTargetId: i
          })
        }
      }, e.id)
    }, [v, Y, w, _, i]),
    U = r.useCallback(e => {
      let {
        section: n,
        data: t
      } = e;
      return (0, l.jsx)(c.rXV, {
        label: y.intl.string(y.t.V0w2ap),
        children: t.map(e => M(e, {
          showAppIcon: true
        }))
      }, n.id)
    }, [M]),
    q = r.useCallback(e => {
      let {
        section: n,
        data: t
      } = e, r = (0, p.Rg)(n), i = null != r ? e => {
        let {
          className: t
        } = e;
        return (0, l.jsx)("span", {
          className: t,
          children: (0, l.jsx)(r, {
            channel: v,
            section: n,
            selectable: false,
            width: 20,
            height: 20
          })
        })
      } : true;
      return (0, l.jsx)(c.Drp, {
        id: n.id,
        label: n.name,
        iconLeft: i,
        leadingAccessory: null != i ? {
          type: "icon",
          icon: i
        } : true,
        children: t.map(e => M(e, {
          showAppIcon: false
        }))
      }, n.id)
    }, [v, M]),
    z = (0, l.jsx)(c.aK1, {
      id: "command-search",
      control: (e, n) => {
        var t, r;
        return (0, l.jsx)(c.VPO, (t = function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              l = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), l.forEach(function(n) {
              var l;
              l = t[n], n in e ? Object.defineProperty(e, n, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[n] = l
            })
          }
          return e
        }({}, e), r = r = {
          query: S,
          onChange: k,
          placeholder: y.intl.string(y.t.m1UwbP),
          ref: n
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            t.push.apply(t, l)
          }
          return t
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }), t))
      }
    }, "command-search");
  if (X) n = (0, l.jsx)(c.Drp, {
    id: "menu-commands-placeholder",
    render: () => (0, l.jsx)(f.A, {}),
    disabled: true
  }, "menu-commands-placeholder");
  else {
    if (0 === D.length) n = (0, l.jsxs)(l.Fragment, {
      children: [F && (0, l.jsxs)(l.Fragment, {
        children: [z, (0, l.jsx)(c.bXX, {})]
      }), (0, l.jsx)(c.Drp, {
        id: "menu-commands-empty",
        label: y.intl.string(y.t.YSNlV2),
        disabled: true
      }, "menu-commands-empty")]
    });
    else if (w)
      if (F) n = (0, l.jsxs)(l.Fragment, {
        children: [z, (0, l.jsx)(c.bXX, {}), D.map(e => M(e, {
          showAppIcon: true
        }))]
      });
      else {
        let e = G.find(e => {
            let {
              section: n
            } = e;
            return n.id === j.Ik.FRECENCY
          }),
          t = G.filter(e => {
            let {
              section: n
            } = e;
            return n.id !== j.Ik.FRECENCY
          });
        n = (0, l.jsxs)(l.Fragment, {
          children: [T && z, null != e && U(e), (0, l.jsx)(c.rXV, {
            label: y.intl.string(y.t.PHjkRE),
            children: t.map(e => q(e))
          })]
        })
      }
    else n = D.map(e => M(e, {
      showAppIcon: true
    }));
    null != C && C.length > 0 && (n = (0, l.jsxs)(l.Fragment, {
      children: [n, (0, l.jsx)(c.bXX, {}, "separator"), C]
    }))
  }
  if (!g.kvI.TEXTUAL.has(v.type))
    if (null == C) return null;
    else n = C;
  return (0, l.jsx)(c.Drp, {
    id: "apps",
    label: y.intl.string(y.t.PHjkRE),
    icon: P ? c.k9F : true,
    leadingAccessory: P ? {
      type: "icon",
      icon: c.k9F
    } : true,
    listClassName: O.p,
    children: n
  })
}