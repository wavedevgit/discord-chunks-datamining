/** Chunk was on 9414 **/
/** chunk id: 720764, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk308063 = require("./308063.js"),
  Chunk493773 = require("./493773.js"),
  Chunk410030 = require("./410030.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk725875 = require("./725875.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk774696 = require("./774696.js"),
  Chunk893916 = require("./893916.js"),
  Chunk408942 = require("./408942.js");

function j(e) {
  let t, {
      guild: n,
      channel: j,
      customWebhooks: v,
      editedWebhook: O,
      selectableWebhookChannels: y,
      refToScroller: C,
      errors: N,
      canNavigate: S
    } = e,
    I = (0, d.ZP)(),
    [w, E] = r.useState(null),
    [P, T] = r.useState(null);
  if (null != j) t = j;
  else {
    let e = Object.values(y);
    t = e.length > 0 ? e[0] : null
  }
  let Z = r.useCallback(async () => {
    if (S() && null !== t) {
      let e = await s.Z.create(n.id, t.id).catch(e => {
        let {
          body: t,
          status: n
        } = e;
        return t && t.code === m.evJ.TOO_MANY_WEBHOOKS ? o.Z.show({
          title: f.intl.string(f.t.cCqsca),
          body: f.intl.string(f.t["w+QZoX"])
        }) : 429 === n ? o.Z.show({
          title: f.intl.string(f.t.cCqsca),
          body: f.intl.string(f.t["YBM+UW"])
        }) : o.Z.show({
          title: f.intl.string(f.t.cCqsca),
          body: f.intl.string(f.t["/4TwKf"])
        }), null
      });
      null != e && (T(e.id), E(e))
    }
  }, [S, t, n]);
  (0, c.ZP)(() => {
    0 === v.length && Z()
  });
  let _ = null !== t;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(a.Text, {
      variant: "text-sm/normal",
      children: f.intl.format(f.t.WL0d0e, {
        helpdeskArticle: b.Z.getArticleURL(m.BhN.WEBHOOKS),
        developersArticle: m.EYA.API_DOCS_WEBHOOKS
      })
    }), (0, i.jsx)(a.izJ, {
      className: g.headerDivider
    }), v.length > 0 ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: g.createButton,
        children: (0, i.jsx)(a.Button, {
          variant: "primary",
          size: "sm",
          text: f.intl.string(f.t["nrO/HH"]),
          disabled: !_,
          onClick: Z
        })
      }), (0, i.jsx)(p.Z, {
        webhooks: v,
        editedWebhook: O,
        selectableWebhookChannels: y,
        lastCreatedWebhookId: null == w ? true : w.id,
        errors: N,
        canNavigate: S
      })]
    }) : function(e, t, n) {
      let r = (0, l.wj)(e) ? h : x;
      return (0, i.jsxs)(u.Z, {
        direction: u.Z.Direction.VERTICAL,
        align: u.Z.Align.CENTER,
        children: [(0, i.jsx)("img", {
          alt: "",
          src: r,
          className: g.emptyStateImage
        }), (0, i.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          children: f.intl.string(f.t.LzmsWl)
        }), (0, i.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: g.emptyStateButton,
          children: (0, i.jsx)(a.Button, {
            variant: "primary",
            text: f.intl.string(f.t.lOQqJK),
            disabled: !t,
            onClick: n
          })
        })]
      })
    }(I, _, Z)]
  })
}