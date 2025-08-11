/** Chunk was on 22988 **/
/** chunk id: 420966, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => h,
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk741247 = require("./741247.js"),
  Chunk345162 = require("./345162.js"),
  Chunk243730 = require("./243730.js"),
  Chunk852898 = require("./852898.js"),
  Chunk203377 = require("./203377.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk793944 = require("./793944.js");

function h() {
  let [e, t] = Chunk73800.useState(true);
  return {
    scrolledToTop: module,
    handleScroll: function(e) {
      t(0 === e.currentTarget.scrollTop)
    }
  }
}

function f(e) {
  let {
    guild: t,
    role: h,
    selectedSection: f,
    setSelectedSection: b
  } = e, x = i.useCallback(e => {
    b(e)
  }, [b]), j = (0, l.e7)([d.Z], () => {
    var e;
    return null == (e = d.Z.getRoleMemberCount(t.id)) ? true : e[h.id]
  }, [h.id, t.id]), v = (0, c.fI)(h), _ = (0, u.Z)(t.id, h);
  i.useEffect(() => {
    v && b(m.ZI.PERMISSIONS)
  }, [v, b]);
  let O = (0, o.e)(t, h);
  return <r.Fragment>{<div className={p.titleContainer}>{<a.Text className={p.titleText} color={"header-primary"} variant={"text-md/semibold"}>{g.intl.format(g.t.BUdGkJ, {
          roleName: h.name
        })}</a.Text>}{O ? <a.P3F className={p.menu} onClick={function(e) {
          (0, s.jW)(e, async () => {
            let {
              default: e
            } = await Promise.resolve().then(n.bind(n, 741247));
            return n => {
              var i, l;
              return (0, r.jsx)(e, (i = function(e) {
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
              }({}, n), l = l = {
                guild: t,
                role: h
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(l)).forEach(function(e) {
                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
              }), i))
            }
          })
        }} aria-label={g.intl.string(g.t.PdRCRk)}><a.xhG size={"md"} color={"currentColor"} /></a.P3F> : null}</div>}{null != _ ? <a.Wn messageType={a.QYI.WARNING}>{_}</a.Wn> : null}{<a.njP className={p.tabBar} aria-label={g.intl.string(g.t["+1H47u"])} selectedItem={f} type={"top"} look={"brand"} onItemSelect={x}>{<a.njP.Item className={p.tabBarItem} id={m.ZI.DISPLAY} disabled={v}>{g.intl.string(g.t.hmdom5)}</a.njP.Item>}{<a.njP.Item className={p.tabBarItem} id={m.ZI.PERMISSIONS}>{g.intl.string(g.t.WIDE1N)}</a.njP.Item>}{<a.njP.Item className={p.tabBarItem} id={m.ZI.VERIFICATIONS} disabled={v}>{g.intl.string(g.t["5//Mur"])}</a.njP.Item>}{<a.njP.Item className={p.tabBarItem} id={m.ZI.MEMBERS} disabled={v}>{v ? g.intl.string(g.t["kg//+/"]) : g.intl.formatToPlainString(g.t.bHnZWV, {
          numMembers: String(j)
        })}</a.njP.Item>}</a.njP>}</r.Fragment>
}