/** Chunk was on 88146 **/
/** chunk id: 501171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk333200 = require("./333200.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk276264 = require("./276264.jsx"),
  Chunk130341 = require("./130341.js"),
  Chunk456077 = require("./456077.jsx"),
  Chunk345162 = require("./345162.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk158776 = require("./158776.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk622349 = require("./622349.js");
let h = Chunk473749.memo(function(e) {
  let {
    member: t,
    status: n,
    guildId: o,
    channelId: s,
    onRoleClick: i
  } = e, u = l.useRef(null), [c, m] = l.useState(false), f = l.useCallback(e => {
    i(e), m(false)
  }, [i]);
  return (0, r.jsx)(d.Z, {
    targetElementRef: u,
    user: t.user,
    guildId: o,
    channelId: s,
    position: "left",
    spacing: 16,
    shouldShow: c,
    onRequestClose: () => {
      m(false)
    },
    onRoleClick: f,
    children: e => {
      let {
        onClick: l,
        onMouseDown: s
      } = e, i = function(e, t) {
        if (null == e) return {};
        var n, r, l = function(e, t) {
          if (null == e) return {};
          var n, r, l = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
          return l
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
        }
        return l
      }(e, ["onClick", "onMouseDown"]);
      return (0, r.jsx)(a.Z, function(e) {
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
      }({
        ref: u,
        user: t.user,
        guildId: o,
        nick: t.name !== t.user.username ? t.name : null,
        colorString: null,
        status: n,
        activities: [],
        applicationStream: null,
        isMobile: false,
        selected: c,
        onClick: () => {
          m(e => !e)
        },
        className: I.memberListItem,
        onMouseDown: e => {
          c ? e.stopPropagation() : null == s || s(e)
        }
      }, i), t.id)
    }
  })
});

function v(e) {
  var t;
  let {
    guildId: n,
    roleId: a,
    channelId: d,
    onClose: v,
    transitionState: y
  } = e, [C, O] = l.useState(a), k = l.useCallback(e => {
    O(e)
  }, []), R = (0, o.e7)([g.Z], () => g.Z.getGuild(n)), j = (0, o.e7)([f.Z], () => f.Z.getSortedRoles(n)), x = (0, c.e)(n, C), _ = l.useMemo(() => j.filter(e => !(0, m.fI)(e)).sort((e, t) => Number(t.hoist) - Number(e.hoist)), [j]), w = (0, o.e7)([b.Z], () => {
    let e = x.map(e => ({
      member: e,
      status: b.Z.getStatus(e.id)
    }));
    return e.sort((e, t) => e.member.name.localeCompare(t.member.name, true, {
      sensitivity: "base"
    })), e
  }, [x]), E = w.length, M = null != (t = null == R ? true : R.name) ? t : S.intl.string(S.t.dtwqPR);
  return (0, r.jsx)(i.u_l, {
    transitionState: y,
    onClose: v,
    title: S.intl.formatToPlainString(S.t.khwGwN, {
      guild: M
    }),
    preview: (0, r.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: S.intl.format(S.t.AWmdd9, {
        count: E
      })
    }),
    input: (0, r.jsx)(s.V, {
      selectionMode: "single",
      value: C,
      onSelectionChange: e => {
        null != e && O(e)
      },
      closeOnSelect: true,
      options: _,
      formatOption: e => {
        var t;
        let n = null != (t = e.colorString) ? t : p.Pbq;
        return {
          id: e.id,
          label: e.name,
          value: e.id,
          leading: (0, r.jsx)(u.xko, {
            color: n,
            colors: e.colorStrings
          })
        }
      },
      label: S.intl.string(S.t.ZveC7e),
      hideLabel: true,
      placeholder: S.intl.string(S.t.ZveC7e)
    }),
    actions: [],
    children: (0, r.jsx)(u.Kqy, {
      gap: 16,
      children: 0 === w.length ? (0, r.jsx)("div", {
        className: I.empty,
        children: (0, r.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: S.intl.string(S.t.tuL9TW)
        })
      }) : (0, r.jsx)("div", {
        className: I.memberList,
        children: w.map(e => {
          let {
            member: t,
            status: l
          } = e;
          return (0, r.jsx)(h, {
            member: t,
            status: l,
            guildId: n,
            channelId: d,
            onRoleClick: k
          }, t.id)
        })
      })
    })
  })
}