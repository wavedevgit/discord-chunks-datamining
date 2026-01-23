/** Chunk was on 15224 **/
/** chunk id: 429131, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CreateEmojiWithRolesModal: () => R,
  UpdateEmojiRolesModal: () => N
}), require("./896048.js"), require("./747238.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk835245 = require("./835245.js"),
  Chunk158954 = require("./158954.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk554375 = require("./554375.js"),
  Chunk608461 = require("./608461.js"),
  Chunk810877 = require("./810877.js"),
  Chunk288224 = require("./288224.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk690521 = require("./690521.js"),
  Chunk599941 = require("./599941.js"),
  Chunk235149 = require("./235149.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk898515 = require("./898515.js");

function _(e) {
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
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i, l = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }
  if (l = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.getOwnPropertyNames(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
  return l
}
let E = e => {
  let {
    className: t,
    onChange: n,
    textVariant: i = "text-md/normal",
    label: l,
    value: o,
    isArchived: s = false
  } = e;
  return (0, r.jsx)(u.Kj, {
    size: 24,
    className: a()(S.J_, t),
    value: o,
    onChange: n,
    type: u.Xo.INVERTED,
    children: (0, r.jsxs)("div", {
      className: S.lN,
      children: [(0, r.jsx)(m.Text, {
        color: "interactive-text-active",
        variant: i,
        children: l
      }), s && (0, r.jsx)(m.LpS, {
        text: w.intl.string(w.t.nhbtEl)
      })]
    })
  })
};

function C(e) {
  let {
    transitionState: t,
    onClose: n,
    initialRoleIds: l = [],
    listingChoices: a,
    emojiUrl: o,
    emojiName: c,
    saving: u,
    onSave: p
  } = e, [f, b] = i.useState(() => new Set(l)), h = i.useMemo(() => s().isEqual(f, new Set(a.map(e => {
    let {
      role_id: t
    } = e;
    return t
  }))), [a, f]), j = f.size > 0;
  return (0, r.jsx)(d.Modal, {
    onClose: n,
    transitionState: t,
    title: w.intl.string(w.t.nP7nDY),
    subtitle: w.intl.string(w.t.I4SYUF),
    preview: true,
    actions: [{
      text: w.intl.string(w.t["ETE/oC"]),
      variant: "secondary",
      onClick: n
    }, {
      text: w.intl.string(w.t["R3BPH+"]),
      variant: "primary",
      onClick: () => {
        p(Array.from(f), n)
      },
      disabled: !j,
      loading: u
    }],
    children: (0, r.jsxs)(m.BJc, {
      gap: "xl",
      children: [(0, r.jsxs)(m.BJc, {
        direction: "horizontal",
        gap: "md",
        align: "center",
        children: [(0, r.jsx)(m._V3, {
          src: o,
          width: 40,
          height: 40,
          alt: ""
        }), (0, r.jsxs)(m.Text, {
          variant: "text-md/normal",
          children: [":", c, ":"]
        })]
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(E, {
          className: S.L7,
          label: w.intl.string(w.t["Ve/y5z"]),
          textVariant: "text-md/semibold",
          value: h,
          onChange: () => {
            h ? b(new Set) : b(new Set(a.map(e => {
              let {
                role_id: t
              } = e;
              return t
            })))
          }
        }, "allSubscriptionRoles"), a.map((e, t) => (0, r.jsxs)(r.Fragment, {
          children: [0 !== t && (0, r.jsx)("div", {
            className: S.OO
          }), (0, r.jsx)(E, {
            onChange: () => {
              let t;
              return t = e.role_id, b(e => {
                let n = new Set(e);
                return e.has(t) ? n.delete(t) : n.add(t), n
              })
            },
            value: f.has(e.role_id),
            label: e.name,
            isArchived: e.archived
          }, e.role_id)]
        }))]
      })]
    })
  })
}

function R(e) {
  let {
    guildId: t,
    data: n,
    file: l
  } = e, a = A(e, ["guildId", "data", "file"]), [o, s] = i.useState(false), d = async (e, r) => {
    try {
      s(true);
      let i = (0, c.A)();
      j.default.track(O.HAw.EMOJI_UPLOAD_STARTED, {
        guild_id: t,
        upload_id: i
      });
      let a = await (0, b.W)({
        guildId: t,
        uploadId: i,
        data: n,
        file: l,
        roles: e
      });
      "object" == typeof a && "id" in a && h.X({
        emojiId: a.id,
        userImage: {
          data: n,
          file: l
        }
      }), r()
    } catch (e) {} finally {
      s(false)
    }
  }, u = (0, x.uP)(t, {
    includeSoftDeleted: true,
    sortDeletedListingsLast: true
  }), m = y.Ay.sanitizeEmojiName(l.name.split(".")[0]);
  return (0, r.jsx)(C, _({
    emojiName: m,
    emojiUrl: n,
    onSave: d,
    saving: o,
    listingChoices: u
  }, a))
}

function N(e) {
  let {
    emoji: t,
    guildId: n
  } = e, l = A(e, ["emoji", "guildId"]), a = g.Ay.getEmojiURL({
    id: t.id,
    animated: t.animated,
    size: 40
  }), [o, {
    loading: s
  }] = (0, f.A)(p.Cp), c = async (e, r) => {
    null != await o({
      guildId: n,
      emojiId: t.id,
      roles: e
    }) && r()
  }, d = (0, x.uP)(n, {
    includeSoftDeleted: true
  });
  d.sort((e, t) => Number(e.soft_deleted) - Number(t.soft_deleted));
  let u = (0, v.A)(n),
    m = i.useMemo(() => {
      let e = new Set(u.map(e => {
        let {
          id: t
        } = e;
        return t
      }));
      return t.roles.filter(t => e.has(t))
    }, [t.roles, u]);
  return (0, r.jsx)(C, _({
    emojiName: t.name,
    emojiUrl: a,
    onSave: c,
    initialRoleIds: m,
    saving: s,
    listingChoices: d
  }, l))
}