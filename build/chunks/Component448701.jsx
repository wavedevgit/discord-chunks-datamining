/** Chunk was on 4385 **/
/** chunk id: 448701, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk587895 = require("./587895.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let c = Chunk975571.A.getArticleURL(Chunk652215.MVz.MISSING_ENTITLEMENT),
  u = Chunk311907.Ay.connectStores([Chunk587895.A], t => {
    let {
      applicationId: i
    } = t;
    return {
      application: r.A.getApplication(i)
    }
  })(function(t) {
    let {
      application: i,
      transitionState: n,
      onClose: l
    } = t;
    return (0, a.jsx)(e.Modal, {
      transitionState: n,
      size: "md",
      onClose: l,
      title: null != i ? s.intl.formatToPlainString(s.t.N2mILu, {
        applicationName: i.name
      }) : s.intl.string(s.t.nS8PUT),
      subtitle: null != i ? s.intl.format(s.t["MM/7qx"], {
        applicationName: i.name,
        supportArticleURL: c
      }) : s.intl.format(s.t["IfQUx+"], {
        supportArticleURL: c
      }),
      actions: [{
        text: s.intl.string(s.t.BddRzS),
        onClick: l,
        variant: "primary"
      }]
    })
  })