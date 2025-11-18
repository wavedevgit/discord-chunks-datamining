/** Chunk was on 9007 **/
/** chunk id: 604623, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  CreateEmojiWithRolesModal: () => R,
  UpdateEmojiRolesModal: () => I
}), require("./388685.js"), require("./35282.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk772848 = require("./772848.js"),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk80932 = require("./80932.js"),
  Chunk935369 = require("./935369.js"),
  Chunk730089 = require("./730089.js"),
  Chunk806774 = require("./806774.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk176354 = require("./176354.js"),
  Chunk584825 = require("./584825.js"),
  Chunk46887 = require("./46887.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk195039 = require("./195039.js");

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = i[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function O(e, t) {
  if (null == e) return {};
  var i, n, r = function(e, t) {
    if (null == e) return {};
    var i, n, r = {},
      l = Object.keys(e);
    for (n = 0; n < l.length; n++) i = l[n], t.indexOf(i) >= 0 || (r[i] = e[i]);
    return r
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (n = 0; n < l.length; n++) i = l[n], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i])
  }
  return r
}
let C = e => {
  let {
    className: t,
    onChange: i,
    textVariant: r = "text-md/normal",
    label: l,
    value: s,
    isArchived: o = false
  } = e;
  return (0, n.jsx)(u.$q, {
    size: 24,
    className: a()(_.checklistRow, t),
    value: s,
    onChange: i,
    type: u.M0.INVERTED,
    children: (0, n.jsxs)("div", {
      className: _.checklistLabel,
      children: [(0, n.jsx)(m.Text, {
        color: "interactive-active",
        variant: r,
        children: l
      }), o && (0, n.jsx)(m.IGR, {
        text: w.intl.string(w.t.nhbtEl)
      })]
    })
  })
};

function E(e) {
  let {
    transitionState: t,
    onClose: i,
    initialRoleIds: l = [],
    listingChoices: a,
    emojiUrl: s,
    emojiName: c,
    saving: u,
    onSave: h
  } = e, [b, f] = r.useState(() => new Set(l)), p = r.useMemo(() => o().isEqual(b, new Set(a.map(e => {
    let {
      role_id: t
    } = e;
    return t
  }))), [a, b]), j = b.size > 0;
  return (0, n.jsx)(d.Modal, {
    onClose: i,
    transitionState: t,
    title: w.intl.string(w.t.nP7nDY),
    subtitle: w.intl.string(w.t.I4SYUF),
    preview: true,
    actions: [{
      text: w.intl.string(w.t["ETE/oC"]),
      variant: "secondary",
      onClick: i
    }, {
      text: w.intl.string(w.t["R3BPH+"]),
      variant: "primary",
      onClick: () => {
        h(Array.from(b), i)
      },
      disabled: !j,
      loading: u
    }],
    children: (0, n.jsxs)(m.Kqy, {
      gap: "xl",
      children: [(0, n.jsxs)(m.Kqy, {
        direction: "horizontal",
        gap: "md",
        align: "center",
        children: [(0, n.jsx)(m.Eep, {
          src: s,
          width: 40,
          height: 40,
          alt: ""
        }), (0, n.jsxs)(m.Text, {
          variant: "text-md/normal",
          children: [":", c, ":"]
        })]
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsx)(C, {
          className: _.selectAllCheckbox,
          label: w.intl.string(w.t["Ve/y5z"]),
          textVariant: "text-md/semibold",
          value: p,
          onChange: () => {
            p ? f(new Set) : f(new Set(a.map(e => {
              let {
                role_id: t
              } = e;
              return t
            })))
          }
        }, "allSubscriptionRoles"), a.map((e, t) => (0, n.jsxs)(n.Fragment, {
          children: [0 !== t && (0, n.jsx)("div", {
            className: _.seperator
          }), (0, n.jsx)(C, {
            onChange: () => {
              let t;
              return t = e.role_id, f(e => {
                let i = new Set(e);
                return e.has(t) ? i.delete(t) : i.add(t), i
              })
            },
            value: b.has(e.role_id),
            label: e.name,
            isArchived: e.archived
          }, e.role_id)]
        }))]
      })]
    })
  })
}

function R(e) {
  var {
    guildId: t,
    data: i,
    file: l
  } = e, a = O(e, ["guildId", "data", "file"]);
  let [s, o] = r.useState(false), d = async (e, n) => {
    try {
      o(true);
      let r = (0, c.Z)();
      j.default.track(S.rMx.EMOJI_UPLOAD_STARTED, {
        guild_id: t,
        upload_id: r
      });
      let a = await (0, f.G)({
        guildId: t,
        uploadId: r,
        data: i,
        file: l,
        roles: e
      });
      "object" == typeof a && "id" in a && p.M({
        emojiId: a.id,
        userImage: {
          data: i,
          file: l
        }
      }), n()
    } catch (e) {} finally {
      o(false)
    }
  }, u = (0, v.qi)(t, {
    includeSoftDeleted: true,
    sortDeletedListingsLast: true
  }), m = x.ZP.sanitizeEmojiName(l.name.split(".")[0]);
  return (0, n.jsx)(E, k({
    emojiName: m,
    emojiUrl: i,
    onSave: d,
    saving: s,
    listingChoices: u
  }, a))
}

function I(e) {
  var {
    emoji: t,
    guildId: i
  } = e, l = O(e, ["emoji", "guildId"]);
  let a = g.ZP.getEmojiURL({
      id: t.id,
      animated: t.animated,
      size: 40
    }),
    [s, {
      loading: o
    }] = (0, b.Z)(h.dv),
    c = async (e, n) => {
      null != await s({
        guildId: i,
        emojiId: t.id,
        roles: e
      }) && n()
    }, d = (0, v.qi)(i, {
      includeSoftDeleted: true
    });
  d.sort((e, t) => Number(e.soft_deleted) - Number(t.soft_deleted));
  let u = (0, y.Z)(i),
    m = r.useMemo(() => {
      let e = new Set(u.map(e => {
        let {
          id: t
        } = e;
        return t
      }));
      return t.roles.filter(t => e.has(t))
    }, [t.roles, u]);
  return (0, n.jsx)(E, k({
    emojiName: t.name,
    emojiUrl: a,
    onSave: c,
    initialRoleIds: m,
    saving: o,
    listingChoices: d
  }, l))
}