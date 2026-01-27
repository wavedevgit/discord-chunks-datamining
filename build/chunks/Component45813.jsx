/** Chunk was on 72752 **/
/** chunk id: 45813, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
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
let O = Chunk46054.A.reactParserFor(Chunk550997.default.getDefaultRules(Chunk903957)),
  j = {};
class x extends Chunk64700.PureComponent {
  track(e, t, r) {
    this.props.track(e, t, r)
  }
  renderFooter() {
    return (0, n.jsxs)("div", {
      className: f.footer,
      children: [(0, n.jsx)(c.MzZ, {
        "aria-label": g.intl.string(g.t["/84uiD"]),
        className: f.socialLink,
        href: (0, _.A)(p.Pq7.TWITTER),
        target: "blank",
        children: (0, n.jsx)(c.p3p, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, n.jsx)(c.MzZ, {
        "aria-label": g.intl.string(g.t["h0or/l"]),
        className: f.socialLink,
        href: p.w7I.FACEBOOK_URL,
        target: "blank",
        children: (0, n.jsx)(c.Zc1, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, n.jsx)(c.MzZ, {
        "aria-label": g.intl.string(g.t["5uVPyf"]),
        className: f.socialLink,
        href: p.w7I.INSTAGRAM_URL,
        target: "blank",
        children: (0, n.jsx)(c.LyU, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, n.jsx)(c.Text, {
        variant: "text-xs/normal",
        children: g.intl.string(g.t.EjVVI7)
      })]
    })
  }
  renderVideo() {
    let {
      changeLog: e
    } = this.props, t = e.youtube_video_id, o = e.video, l = e.image;
    if (null != t && "" !== t) return (0, n.jsx)(d.rr, {
      className: f.video,
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
      provider: s.mt.YOUTUBE,
      maxWidth: 432,
      maxHeight: 240,
      renderVideoComponent: h.$o,
      renderImageComponent: h.LL,
      renderLinkComponent: h.bU,
      onPlay: () => {
        this.track(p.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, true)
      }
    });
    if (null != o && "" !== o) {
      let e = o.startsWith("https://") ? o : r(274516)("./".concat(o));
      return (0, n.jsx)(u.A, {
        src: e,
        poster: l,
        width: 432,
        height: 240,
        loop: true,
        muted: true,
        autoPlay: true,
        className: f.video,
        onPlay: () => {
          this.track(p.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, true)
        }
      })
    }
    if (null == l || "" === l) return null;
    {
      let e = l.startsWith("https://") ? l : r(274516)("./".concat(l));
      return (0, n.jsx)("img", {
        className: f.image,
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
        changeLog: o,
        onScroll: l,
        track: c
      } = r,
      d = function(e, t) {
        if (null == e) return {};
        var r, n, o, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
          for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
          return l
        }
        if (l = function(e, t) {
            if (null == e) return {};
            var r, n, o = {},
              l = Object.getOwnPropertyNames(e);
            for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            return o
          }(e, t), Object.getOwnPropertySymbols)
          for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(r, ["changeLog", "onScroll", "track"]);
    return (0, n.jsx)(i.Modal, (e = function(e) {
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
    }({}, d), t = t = {
      title: g.intl.string(g.t.LRmNAl),
      subtitle: g.intl.format(g.t.Fb8xx2, {
        date: null != o.date && "" !== o.date ? a()(o.date).toDate() : new Date
      }),
      actions: [],
      actionBarInput: this.renderFooter(),
      onClose: () => Promise.resolve(this.props.onClose()),
      scrollerRef: this.scrollerRef,
      onScroll: this.handleScroll,
      children: (0, n.jsxs)("div", {
        tabIndex: 0,
        role: "region",
        "aria-label": g.intl.string(g.t.HzBchE),
        children: [this.renderVideo(), O(o.body, false, {
          changeLog: this,
          interpolations: j,
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
    super(...e), y(this, "scrollerRef", o.createRef()), y(this, "handleScroll", () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null != e) {
        var t, r;
        null == (t = (r = this.props).onScroll) || t.call(r, e)
      }
    }), y(this, "trackLinkClick", e => {
      this.props.track(p.HAw.CHANGE_LOG_CTA_CLICKED, {
        cta_type: "inline_link",
        target: e
      }, false)
    })
  }
}
let A = x