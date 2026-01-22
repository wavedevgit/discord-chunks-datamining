/** Chunk was on 50737 **/
/** chunk id: 45813, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => k
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk871751 = require("./871751.jsx"),
  Chunk259407 = require("./259407.jsx"),
  Chunk607470 = require("./607470.jsx"),
  Chunk472501 = require("./472501.js"),
  Chunk46054 = require("./46054.js"),
  Chunk652176 = require("./652176.jsx"),
  Chunk550997 = require("./550997.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk903957 = require("./903957.js");

function y(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let j = Chunk46054.A.reactParserFor(Chunk550997.default.getDefaultRules(Chunk903957)),
  A = {};
class w extends Chunk64700.PureComponent {
  track(e, t, r) {
    this.props.track(e, t, r)
  }
  renderFooter() {
    return (0, n.jsxs)("div", {
      className: m.footer,
      children: [(0, n.jsx)(a.MzZ, {
        "aria-label": O.intl.string(O.t["/84uiD"]),
        className: m.socialLink,
        href: (0, d.A)(b.Pq7.TWITTER),
        target: "blank",
        children: (0, n.jsx)(a.p3p, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, n.jsx)(a.MzZ, {
        "aria-label": O.intl.string(O.t["h0or/l"]),
        className: m.socialLink,
        href: b.w7I.FACEBOOK_URL,
        target: "blank",
        children: (0, n.jsx)(a.Zc1, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, n.jsx)(a.MzZ, {
        "aria-label": O.intl.string(O.t["5uVPyf"]),
        className: m.socialLink,
        href: b.w7I.INSTAGRAM_URL,
        target: "blank",
        children: (0, n.jsx)(a.LyU, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, n.jsx)(a.Text, {
        variant: "text-xs/normal",
        children: O.intl.string(O.t.EjVVI7)
      })]
    })
  }
  renderVideo() {
    let {
      changeLog: e
    } = this.props, t = e.youtube_video_id, l = e.video, o = e.image;
    if (null != t && "" !== t) return (0, n.jsx)(s.rr, {
      className: m.video,
      allowFullScreen: false,
      href: "https://youtu.be/".concat(t),
      thumbnail: {
        url: "https://i.ytimg.com/vi/".concat(t, "/hqdefault.jpg"),
        width: 432,
        height: 240
      },
      video: {
        url: "https://www.youtube.com/embed/".concat(t, "?vq=large&rel=0&controls=0&showinfo=0"),
        width: 432,
        height: 240
      },
      provider: u.mt.YOUTUBE,
      maxWidth: 432,
      maxHeight: 240,
      renderVideoComponent: p.$o,
      renderImageComponent: p.LL,
      renderLinkComponent: p.bU,
      onPlay: () => {
        this.track(b.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, true)
      }
    });
    if (null != l && "" !== l) {
      let e = l.startsWith("https://") ? l : r(274516)("./".concat(l));
      return (0, n.jsx)(h.A, {
        src: e,
        poster: o,
        width: 432,
        height: 240,
        loop: true,
        muted: true,
        autoPlay: true,
        className: m.video,
        onPlay: () => {
          this.track(b.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, true)
        }
      })
    }
    if (null == o || "" === o) return null;
    {
      let e = o.startsWith("https://") ? o : r(274516)("./".concat(o));
      return (0, n.jsx)("img", {
        className: m.image,
        alt: "",
        src: e,
        width: 432,
        height: 240
      })
    }
  }
  render() {
    var e, t;
    let r = this.props,
      {
        changeLog: l,
        onScroll: o,
        track: a
      } = r,
      s = function(e, t) {
        if (null == e) return {};
        var r, n, l, o = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
          for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
          return o
        }
        if (o = function(e, t) {
            if (null == e) return {};
            var r, n, l = {},
              o = Object.getOwnPropertyNames(e);
            for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l
          }(e, t), Object.getOwnPropertySymbols)
          for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
        return o
      }(r, ["changeLog", "onScroll", "track"]);
    return (0, n.jsx)(c.Modal, (e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          y(e, t, r[t])
        })
      }
      return e
    }({}, s), t = t = {
      title: O.intl.string(O.t.LRmNAl),
      subtitle: O.intl.format(O.t.Fb8xx2, {
        date: null != l.date && "" !== l.date ? i()(l.date).toDate() : new Date
      }),
      actions: [],
      actionBarInput: this.renderFooter(),
      onClose: () => Promise.resolve(this.props.onClose()),
      scrollerRef: this.scrollerRef,
      onScroll: this.handleScroll,
      children: (0, n.jsxs)("div", {
        tabIndex: 0,
        role: "region",
        "aria-label": O.intl.string(O.t.HzBchE),
        children: [this.renderVideo(), j(l.body, false, {
          changeLog: this,
          interpolations: A,
          onLinkClick: this.trackLinkClick
        })]
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
    }), e))
  }
  constructor(...e) {
    super(...e), y(this, "scrollerRef", l.createRef()), y(this, "handleScroll", () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null != e) {
        var t, r;
        null == (t = (r = this.props).onScroll) || t.call(r, e)
      }
    }), y(this, "trackLinkClick", e => {
      this.props.track(b.HAw.CHANGE_LOG_CTA_CLICKED, {
        cta_type: "inline_link",
        target: e
      }, false)
    })
  }
}
let k = w