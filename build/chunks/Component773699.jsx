/** Chunk was on 42897 **/
/** chunk id: 773699, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
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
let _ = e => {
  let n, {
      commandType: t,
      commandTargetId: i,
      channel: _,
      guildId: O,
      onHeightUpdate: w,
      context: y
    } = e,
    I = (0, s.bG)([m.A], () => m.A.getGuild(null != O ? O : _.guild_id)),
    C = (0, s.bG)([h.default], () => h.default.getUser(i)),
    E = (0, f.A)({
      user: C,
      guildId: null == I ? true : I.id,
      context: y
    }),
    k = r.useMemo(() => ({
      channel: _,
      type: "channel"
    }), [_]),
    {
      newUIEnabled: P,
      searchEnabled: X
    } = g.A.useConfig({
      location: "useAppsCommandItems"
    }),
    [G, M] = r.useState(""),
    D = "" !== G,
    {
      commands: F,
      commandsByActiveSection: N,
      sectionDescriptors: R,
      loading: T
    } = c.cu({
      context: k,
      filters: {
        text: D ? G : true,
        commandTypes: [t]
      },
      options: {
        limit: x.YC,
        includeFrecency: P && !D,
        scoreMethod: D ? u.M.COMMAND_OR_APPLICATION : true
      },
      allowFetch: true
    }),
    {
      sections: U
    } = r.useMemo(() => {
      let e = {};
      return R.forEach(n => {
        e[n.id] = n
      }), {
        sections: e
      }
    }, [R]),
    V = r.useRef(T);
  r.useEffect(() => {
    T !== V.current && (V.current = T, null == w || w())
  }, [T, w]);
  let S = r.useCallback((e, n) => {
      let {
        showAppIcon: t
      } = n;
      a()(null != _, "menu item should not show if channel is null");
      let r = U[e.applicationId],
        s = t && null != r ? (0, p.Rg)(r) : true;
      return (0, l.jsx)(o.Drp, {
        id: e.id,
        label: e.displayName,
        iconLeft: null != s ? () => (0, l.jsx)(s, {
          channel: _,
          section: r,
          width: 20,
          height: 20,
          selectable: false
        }) : true,
        icon: P ? o.lX7 : true,
        action: () => {
          (0, d.A)({
            command: e,
            optionValues: {},
            context: {
              channel: _,
              guild: I
            },
            commandTargetId: i
          })
        }
      }, e.id)
    }, [_, U, P, I, i]),
    Y = r.useCallback(e => {
      let {
        section: n,
        data: t
      } = e;
      return (0, l.jsx)(o.rXV, {
        label: A.intl.string(A.t.V0w2ap),
        children: t.map(e => S(e, {
          showAppIcon: true
        }))
      }, n.id)
    }, [S]),
    L = r.useCallback(e => {
      let {
        section: n,
        data: t
      } = e, r = (0, p.Rg)(n);
      return (0, l.jsx)(o.Drp, {
        id: n.id,
        label: n.name,
        iconLeft: null != r ? () => (0, l.jsx)(r, {
          channel: _,
          section: n,
          width: 20,
          height: 20,
          selectable: false
        }) : true,
        children: t.map(e => S(e, {
          showAppIcon: false
        }))
      }, n.id)
    }, [_, S]),
    H = (0, l.jsx)(o.aK1, {
      id: "command-search",
      control: (e, n) => {
        var t, r;
        return (0, l.jsx)(o.VPO, (t = function(e) {
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
          onChange: M,
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
  if (T) n = (0, l.jsx)(o.Drp, {
    id: "menu-commands-placeholder",
    render: () => (0, l.jsx)(b.A, {}),
    disabled: true
  }, "menu-commands-placeholder");
  else {
    if (0 === F.length) n = (0, l.jsxs)(l.Fragment, {
      children: [D && (0, l.jsxs)(l.Fragment, {
        children: [H, (0, l.jsx)(o.bXX, {})]
      }), (0, l.jsx)(o.Drp, {
        id: "menu-commands-empty",
        label: A.intl.string(A.t.YSNlV2),
        disabled: true
      }, "menu-commands-empty")]
    });
    else if (P)
      if (D) n = (0, l.jsxs)(l.Fragment, {
        children: [H, (0, l.jsx)(o.bXX, {}), F.map(e => S(e, {
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
          children: [X && H, null != e && Y(e), (0, l.jsx)(o.rXV, {
            label: A.intl.string(A.t.PHjkRE),
            children: t.map(e => L(e))
          })]
        })
      }
    else n = F.map(e => S(e, {
      showAppIcon: true
    }));
    null != E && E.length > 0 && (n = (0, l.jsxs)(l.Fragment, {
      children: [n, (0, l.jsx)(o.bXX, {}, "separator"), E]
    }))
  }
  if (!j.kvI.TEXTUAL.has(_.type))
    if (null == E) return null;
    else n = E;
  return (0, l.jsx)(o.Drp, {
    id: "apps",
    label: A.intl.string(A.t.PHjkRE),
    listClassName: v.p,
    children: n
  })
}