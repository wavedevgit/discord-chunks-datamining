/** Chunk was on 42897 **/
/** chunk id: 773699, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => O
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
let O = e => {
  let n, {
      commandType: t,
      commandTargetId: a,
      channel: O,
      guildId: y,
      onHeightUpdate: w,
      context: _
    } = e,
    E = (0, s.bG)([h.A], () => h.A.getGuild(null != y ? y : O.guild_id)),
    I = (0, s.bG)([m.default], () => m.default.getUser(a)),
    C = (0, p.A)({
      user: I,
      guildId: null == E ? true : E.id,
      context: _
    }),
    k = r.useMemo(() => ({
      channel: O,
      type: "channel"
    }), [O]),
    {
      newUIEnabled: P,
      searchEnabled: X
    } = g.A.useConfig({
      location: "useAppsCommandItems"
    }),
    [G, D] = r.useState(""),
    M = "" !== G,
    {
      commands: F,
      commandsByActiveSection: N,
      sectionDescriptors: R,
      loading: U
    } = u.cu({
      context: k,
      filters: {
        text: M ? G : true,
        commandTypes: [t]
      },
      options: {
        limit: x.YC,
        includeFrecency: P && !M,
        scoreMethod: M ? d.M.COMMAND_OR_APPLICATION : true
      },
      allowFetch: true
    }),
    {
      sections: V
    } = r.useMemo(() => {
      let e = {};
      return R.forEach(n => {
        e[n.id] = n
      }), {
        sections: e
      }
    }, [R]),
    S = r.useRef(U);
  r.useEffect(() => {
    U !== S.current && (S.current = U, null == w || w())
  }, [U, w]);
  let T = r.useCallback((e, n) => {
      let {
        showAppIcon: t
      } = n;
      i()(null != O, "menu item should not show if channel is null");
      let r = V[e.applicationId],
        s = t && null != r ? (0, f.Rg)(r) : true;
      return (0, l.jsx)(c.Drp, {
        id: e.id,
        label: e.displayName,
        iconLeft: null != s ? () => (0, l.jsx)(s, {
          channel: O,
          section: r,
          width: 20,
          height: 20,
          selectable: false
        }) : true,
        icon: P ? c.lX7 : true,
        action: () => {
          (0, o.A)({
            command: e,
            optionValues: {},
            context: {
              channel: O,
              guild: E
            },
            commandTargetId: a
          })
        }
      }, e.id)
    }, [O, V, P, E, a]),
    Y = r.useCallback(e => {
      let {
        section: n,
        data: t
      } = e;
      return (0, l.jsx)(c.rXV, {
        label: A.intl.string(A.t.V0w2ap),
        children: t.map(e => T(e, {
          showAppIcon: true
        }))
      }, n.id)
    }, [T]),
    L = r.useCallback(e => {
      let {
        section: n,
        data: t
      } = e, r = (0, f.Rg)(n);
      return (0, l.jsx)(c.Drp, {
        id: n.id,
        label: n.name,
        iconLeft: null != r ? () => (0, l.jsx)(r, {
          channel: O,
          section: n,
          width: 20,
          height: 20,
          selectable: false
        }) : true,
        children: t.map(e => T(e, {
          showAppIcon: false
        }))
      }, n.id)
    }, [O, T]),
    K = (0, l.jsx)(c.aK1, {
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
          query: G,
          onChange: D,
          placeholder: A.intl.string(A.t.m1UwbP),
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
  if (U) n = (0, l.jsx)(c.Drp, {
    id: "menu-commands-placeholder",
    render: () => (0, l.jsx)(b.A, {}),
    disabled: true
  }, "menu-commands-placeholder");
  else {
    if (0 === F.length) n = (0, l.jsxs)(l.Fragment, {
      children: [M && (0, l.jsxs)(l.Fragment, {
        children: [K, (0, l.jsx)(c.bXX, {})]
      }), (0, l.jsx)(c.Drp, {
        id: "menu-commands-empty",
        label: A.intl.string(A.t.YSNlV2),
        disabled: true
      }, "menu-commands-empty")]
    });
    else if (P)
      if (M) n = (0, l.jsxs)(l.Fragment, {
        children: [K, (0, l.jsx)(c.bXX, {}), F.map(e => T(e, {
          showAppIcon: true
        }))]
      });
      else {
        let e = N.find(e => {
            let {
              section: n
            } = e;
            return n.id === x.Ik.FRECENCY
          }),
          t = N.filter(e => {
            let {
              section: n
            } = e;
            return n.id !== x.Ik.FRECENCY
          });
        n = (0, l.jsxs)(l.Fragment, {
          children: [X && K, null != e && Y(e), (0, l.jsx)(c.rXV, {
            label: A.intl.string(A.t.PHjkRE),
            children: t.map(e => L(e))
          })]
        })
      }
    else n = F.map(e => T(e, {
      showAppIcon: true
    }));
    null != C && C.length > 0 && (n = (0, l.jsxs)(l.Fragment, {
      children: [n, (0, l.jsx)(c.bXX, {}, "separator"), C]
    }))
  }
  if (!j.kvI.TEXTUAL.has(O.type))
    if (null == C) return null;
    else n = C;
  return (0, l.jsx)(c.Drp, {
    id: "apps",
    label: A.intl.string(A.t.PHjkRE),
    listClassName: v.p,
    children: n
  })
}