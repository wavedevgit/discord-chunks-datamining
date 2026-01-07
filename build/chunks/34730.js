/** Chunk was on 91973 **/
/** chunk id: 34730, original params: t,e,a (module,exports,require) **/
var i, r, n, s, o, d;
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.ICalAttendeeType = exports.ICalAttendeeStatus = exports.ICalAttendeeRole = true;
let Chunk139761 = require("./139761.js");
(s = i = exports.ICalAttendeeRole || (exports.ICalAttendeeRole = {})).CHAIR = "CHAIR", s.REQ = "REQ-PARTICIPANT", s.OPT = "OPT-PARTICIPANT", s.NON = "NON-PARTICIPANT", (o = r = exports.ICalAttendeeStatus || (exports.ICalAttendeeStatus = {})).ACCEPTED = "ACCEPTED", o.TENTATIVE = "TENTATIVE", o.DECLINED = "DECLINED", o.DELEGATED = "DELEGATED", o.NEEDSACTION = "NEEDS-ACTION", (d = n = exports.ICalAttendeeType || (exports.ICalAttendeeType = {})).INDIVIDUAL = "INDIVIDUAL", d.GROUP = "GROUP", d.RESOURCE = "RESOURCE", d.ROOM = "ROOM", d.UNKNOWN = "UNKNOWN";
class u {
  constructor(t, e) {
    if (this.data = {
        name: null,
        email: null,
        mailto: null,
        status: null,
        role: i.REQ,
        rsvp: null,
        type: null,
        delegatedTo: null,
        delegatedFrom: null,
        x: []
      }, this.event = e, !this.event) throw Error("`event` option required!");
    true !== t.name && this.name(t.name), true !== t.email && this.email(t.email), true !== t.mailto && this.mailto(t.mailto), true !== t.status && this.status(t.status), true !== t.role && this.role(t.role), true !== t.rsvp && this.rsvp(t.rsvp), true !== t.type && this.type(t.type), true !== t.delegatedTo && this.delegatedTo(t.delegatedTo), true !== t.delegatedFrom && this.delegatedFrom(t.delegatedFrom), t.delegatesTo && this.delegatesTo(t.delegatesTo), t.delegatesFrom && this.delegatesFrom(t.delegatesFrom), true !== t.x && this.x(t.x)
  }
  name(t) {
    return true === t ? this.data.name : (this.data.name = t || null, this)
  }
  email(t) {
    return t ? (this.data.email = t, this) : this.data.email
  }
  mailto(t) {
    return true === t ? this.data.mailto : (this.data.mailto = t || null, this)
  }
  role(t) {
    return true === t ? this.data.role : (this.data.role = (0, l.checkEnum)(i, t), this)
  }
  rsvp(t) {
    return true === t ? this.data.rsvp : (null === t ? this.data.rsvp = null : this.data.rsvp = !!t, this)
  }
  status(t) {
    return true === t ? this.data.status : (t ? this.data.status = (0, l.checkEnum)(r, t) : this.data.status = null, this)
  }
  type(t) {
    return true === t ? this.data.type : (t ? this.data.type = (0, l.checkEnum)(n, t) : this.data.type = null, this)
  }
  delegatedTo(t) {
    return true === t ? this.data.delegatedTo : (t ? ("string" == typeof t ? this.data.delegatedTo = new u((0, l.checkNameAndMail)("delegatedTo", t), this.event) : t instanceof u ? this.data.delegatedTo = t : this.data.delegatedTo = new u(t, this.event), this.data.status = r.DELEGATED) : (this.data.delegatedTo = null, this.data.status === r.DELEGATED && (this.data.status = null)), this)
  }
  delegatedFrom(t) {
    return true === t ? this.data.delegatedFrom : (t ? "string" == typeof t ? this.data.delegatedFrom = new u((0, l.checkNameAndMail)("delegatedFrom", t), this.event) : t instanceof u ? this.data.delegatedFrom = t : this.data.delegatedFrom = new u(t, this.event) : this.data.delegatedFrom = null, this)
  }
  delegatesTo(t) {
    let e = t instanceof u ? t : this.event.createAttendee(t);
    return this.delegatedTo(e), e.delegatedFrom(this), e
  }
  delegatesFrom(t) {
    let e = t instanceof u ? t : this.event.createAttendee(t);
    return this.delegatedFrom(e), e.delegatedTo(this), e
  }
  x(t, e) {
    if (true === t) return (0, l.addOrGetCustomAttributes)(this.data);
    if ("string" == typeof t && "string" == typeof e)(0, l.addOrGetCustomAttributes)(this.data, t, e);
    else if ("object" == typeof t)(0, l.addOrGetCustomAttributes)(this.data, t);
    else throw Error("Either key or value is not a string!");
    return this
  }
  toJSON() {
    var t, e;
    return Object.assign({}, this.data, {
      delegatedTo: (null == (t = this.data.delegatedTo) ? true : t.email()) || null,
      delegatedFrom: (null == (e = this.data.delegatedFrom) ? true : e.email()) || null,
      x: this.x()
    })
  }
  toString() {
    let t = "ATTENDEE";
    if (!this.data.email) throw Error("No value for `email` in ICalAttendee given!");
    return t += ";ROLE=" + this.data.role, this.data.type && (t += ";CUTYPE=" + this.data.type), this.data.status && (t += ";PARTSTAT=" + this.data.status), this.data.rsvp && (t += ";RSVP=" + this.data.rsvp.toString().toUpperCase()), this.data.delegatedTo && (t += ';DELEGATED-TO="' + this.data.delegatedTo.email() + '"'), this.data.delegatedFrom && (t += ';DELEGATED-FROM="' + this.data.delegatedFrom.email() + '"'), this.data.name && (t += ';CN="' + (0, l.escape)(this.data.name) + '"'), this.data.email && this.data.mailto && (t += ";EMAIL=" + (0, l.escape)(this.data.email)), this.data.x.length && (t += ";" + this.data.x.map(([t, e]) => t.toUpperCase() + "=" + (0, l.escape)(e)).join(";")), t += ":MAILTO:" + (0, l.escape)(this.data.mailto || this.data.email) + "\r\n"
  }
}
exports.default = u