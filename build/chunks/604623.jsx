/** Chunk was on 9007 **/
/** chunk id: 604623, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  CreateEmojiWithRolesModal: () => E,
  UpdateEmojiRolesModal: () => C
}), require("./388685.js"), require("./35282.js"), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk772848 = require("./772848.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk80932 = require("./80932.js"),
  Chunk935369 = require("./935369.js"),
  Chunk730089 = require("./730089.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk176354 = require("./176354.js"),
  Chunk584825 = require("./584825.js"),
  Chunk46887 = require("./46887.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk368477 = require("./368477.js");

function w(e) {
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

function _(e, t) {
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
let k = e => {
  let {
    className: t,
    onChange: i,
    textVariant: r = "text-md/normal",
    label: l,
    value: s,
    isArchived: o = false
  } = e;
  return <u.XZJ size={24} className={a()(S.checklistRow, t)} value={s} onChange={i} type={u.XZJ.Types.INVERTED}><div className={S.checklistLabel}>{<u.Text color={"interactive-active"} variant={r}>{l}</u.Text>}{o && <u.IGR text={y.intl.string(y.t.nhbtEh)} />}</div></u.XZJ>
};

function O(e) {
  let {
    transitionState: t,
    onClose: i,
    initialRoleIds: l = [],
    listingChoices: a,
    emojiUrl: s,
    emojiName: c,
    saving: m,
    onSave: h
  } = e, [b, f] = r.useState(() => new Set(l)), p = r.useMemo(() => o().isEqual(b, new Set(a.map(e => {
    let {
      role_id: t
    } = e;
    return t
  }))), [a, b]), g = b.size > 0, j = e => f(t => {
    let i = new Set(t);
    return t.has(e) ? i.delete(e) : i.add(e), i
  });
  return <d.Modal onClose={i} transitionState={t} title={y.intl.string(y.t.nP7nDQ)} subtitle={y.intl.string(y.t.I4SYUF)} preview={true} actions={[{
      text: y.intl.string(y.t["ETE/oK"]),
      variant: "secondary",
      onClick: i
    }, {
      text: y.intl.string(y.t.R3BPHx),
      variant: "primary",
      onClick: () => {
        h(Array.from(b), i)
      },
      disabled: !g,
      loading: m
    }]}><u.Kqy gap={"xl"}>{<u.Kqy direction={"horizontal"} gap={"md"} align={"center"}>{<u.Eep src={s} width={40} height={40} alt={""} />}{<u.Text variant={"text-md/normal"}>{":"}{c}{":"}</u.Text>}</u.Kqy>}{<div>{<k className={S.selectAllCheckbox} label={y.intl.string(y.t["Ve/y5+"])} textVariant={"text-md/semibold"} value={p} onChange={() => {
            p ? f(new Set) : f(new Set(a.map(e => {
              let {
                role_id: t
              } = e;
              return t
            })))
          }} />}{a.map((e, t) => <n.Fragment>{0 !== t && <div className={S.seperator} />}{<k onChange={() => j(e.role_id)} value={b.has(e.role_id)} label={e.name} isArchived={e.archived} />}</n.Fragment>)}</div>}</u.Kqy></d.Modal>
}

function E(e) {
  var {
    guildId: t,
    data: i,
    file: l
  } = e, a = _(e, ["guildId", "data", "file"]);
  let [s, o] = r.useState(false), d = async (e, n) => {
    try {
      o(true);
      let r = (0, c.Z)();
      f.default.track(v.rMx.EMOJI_UPLOAD_STARTED, {
        guild_id: t,
        upload_id: r
      }), await (0, b.G)({
        guildId: t,
        uploadId: r,
        data: i,
        file: l,
        roles: e
      }), n()
    } catch (e) {} finally {
      o(false)
    }
  }, u = (0, j.qi)(t, {
    includeSoftDeleted: true,
    sortDeletedListingsLast: true
  }), m = g.ZP.sanitizeEmojiName(l.name.split(".")[0]);
  return <O{...w({
    emojiName: m,
    emojiUrl: i,
    onSave: d,
    saving: s,
    listingChoices: u
  }, a)} />
}

function C(e) {
  var {
    emoji: t,
    guildId: i
  } = e, l = _(e, ["emoji", "guildId"]);
  let a = p.ZP.getEmojiURL({
      id: t.id,
      animated: t.animated,
      size: 40
    }),
    [s, {
      loading: o
    }] = (0, h.Z)(m.dv),
    c = async (e, n) => {
      null != await s({
        guildId: i,
        emojiId: t.id,
        roles: e
      }) && n()
    }, d = (0, j.qi)(i, {
      includeSoftDeleted: true
    });
  d.sort((e, t) => Number(e.soft_deleted) - Number(t.soft_deleted));
  let u = (0, x.Z)(i),
    b = r.useMemo(() => {
      let e = new Set(u.map(e => {
        let {
          id: t
        } = e;
        return t
      }));
      return t.roles.filter(t => e.has(t))
    }, [t.roles, u]);
  return <O{...w({
    emojiName: t.name,
    emojiUrl: a,
    onSave: c,
    initialRoleIds: b,
    saving: o,
    listingChoices: d
  }, l)} />
}