/** Chunk was on 79531 **/
/** chunk id: 570870, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk10718 = require("./10718.js"),
  Chunk367790 = require("./367790.js"),
  Chunk667204 = require("./667204.js"),
  Chunk826298 = require("./826298.js"),
  Chunk276022 = require("./276022.jsx"),
  Chunk978983 = require("./978983.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk959218 = require("./959218.js"),
  Chunk981631 = require("./981631.js"),
  Chunk689079 = require("./689079.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk891628 = require("./891628.js");
let O = e => {
  let t, {
      commandType: n,
      commandTargetId: l,
      channel: O,
      guildId: E,
      onHeightUpdate: C,
      context: I
    } = e,
    P = (0, a.e7)([f.Z], () => f.Z.getGuild(null != E ? E : O.guild_id)),
    _ = (0, a.e7)([m.default], () => m.default.getUser(l)),
    w = (0, h.Z)({
      user: _,
      guildId: null == P ? true : P.id,
      context: I
    }),
    S = r.useMemo(() => ({
      channel: O,
      type: "channel"
    }), [O]),
    {
      newUIEnabled: Z,
      searchEnabled: N
    } = b.Z.useConfig({
      location: "useAppsCommandItems"
    }),
    [M, T] = r.useState(""),
    A = "" !== M,
    {
      commands: D,
      commandsByActiveSection: k,
      sectionDescriptors: F,
      loading: R
    } = c.wi({
      context: S,
      filters: {
        text: A ? M : true,
        commandTypes: [n]
      },
      options: {
        limit: x.lr,
        includeFrecency: Z && !A,
        scoreMethod: A ? d.p.COMMAND_OR_APPLICATION : true
      },
      allowFetch: true
    }),
    {
      sections: L
    } = r.useMemo(() => {
      let e = {};
      return F.forEach(t => {
        e[t.id] = t
      }), {
        sections: e
      }
    }, [F]),
    H = r.useRef(R);
  r.useEffect(() => {
    R !== H.current && (H.current = R, null == C || C())
  }, [R, C]);
  let U = r.useCallback((e, t) => {
      let {
        showAppIcon: n
      } = t;
      s()(null != O, "menu item should not show if channel is null");
      let r = L[e.applicationId],
        a = n && null != r ? (0, p.ky)(r) : true;
      return (0, i.jsx)(o.sNh, {
        id: e.id,
        label: e.displayName,
        iconLeft: null != a ? () => (0, i.jsx)(a, {
          channel: O,
          section: r,
          width: 20,
          height: 20,
          selectable: false
        }) : true,
        icon: Z ? o.Uuj : true,
        action: () => {
          (0, u.Z)({
            command: e,
            optionValues: {},
            context: {
              channel: O,
              guild: P
            },
            commandTargetId: l
          })
        }
      }, e.id)
    }, [O, L, Z, P, l]),
    W = r.useCallback(e => {
      let {
        section: t,
        data: n
      } = e;
      return (0, i.jsx)(o.kSQ, {
        label: y.intl.string(y.t.V0w2ap),
        children: n.map(e => U(e, {
          showAppIcon: true
        }))
      }, t.id)
    }, [U]),
    G = r.useCallback(e => {
      let {
        section: t,
        data: n
      } = e, r = (0, p.ky)(t);
      return (0, i.jsx)(o.sNh, {
        id: t.id,
        label: t.name,
        iconLeft: null != r ? () => (0, i.jsx)(r, {
          channel: O,
          section: t,
          width: 20,
          height: 20,
          selectable: false
        }) : true,
        children: n.map(e => U(e, {
          showAppIcon: false
        }))
      }, t.id)
    }, [O, U]),
    B = (0, i.jsx)(o.II_, {
      id: "command-search",
      control: (e, t) => {
        var n, r;
        return (0, i.jsx)(o.ne, (n = function(e) {
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
        }({}, e), r = r = {
          query: M,
          onChange: T,
          placeholder: y.intl.string(y.t.m1UwbP),
          ref: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
        }), n))
      }
    }, "command-search");
  if (R) t = (0, i.jsx)(o.sNh, {
    id: "menu-commands-placeholder",
    render: () => (0, i.jsx)(g.Z, {}),
    disabled: true
  }, "menu-commands-placeholder");
  else {
    if (0 === D.length) t = (0, i.jsxs)(i.Fragment, {
      children: [A && (0, i.jsxs)(i.Fragment, {
        children: [B, (0, i.jsx)(o.Clw, {})]
      }), (0, i.jsx)(o.sNh, {
        id: "menu-commands-empty",
        label: y.intl.string(y.t.YSNlV2),
        disabled: true
      }, "menu-commands-empty")]
    });
    else if (Z)
      if (A) t = (0, i.jsxs)(i.Fragment, {
        children: [B, (0, i.jsx)(o.Clw, {}), D.map(e => U(e, {
          showAppIcon: true
        }))]
      });
      else {
        let e = k.find(e => {
            let {
              section: t
            } = e;
            return t.id === x.bi.FRECENCY
          }),
          n = k.filter(e => {
            let {
              section: t
            } = e;
            return t.id !== x.bi.FRECENCY
          });
        t = (0, i.jsxs)(i.Fragment, {
          children: [N && B, null != e && W(e), (0, i.jsx)(o.kSQ, {
            label: y.intl.string(y.t.PHjkRE),
            children: n.map(e => G(e))
          })]
        })
      }
    else t = D.map(e => U(e, {
      showAppIcon: true
    }));
    null != w && w.length > 0 && (t = (0, i.jsxs)(i.Fragment, {
      children: [t, (0, i.jsx)(o.Clw, {}, "separator"), w]
    }))
  }
  if (!j.TPd.TEXTUAL.has(O.type))
    if (null == w) return null;
    else t = w;
  return (0, i.jsx)(o.sNh, {
    id: "apps",
    label: y.intl.string(y.t.PHjkRE),
    listClassName: v.list,
    children: t
  })
}