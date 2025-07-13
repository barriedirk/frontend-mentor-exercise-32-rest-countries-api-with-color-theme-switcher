export interface Country {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cioc?: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: Demonyms;
  cca3: string;
  translations: Translations;
  flag: string;
  maps: Maps;
  population: number;
  gini?: Gini;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  spa?: Spa;
  eng?: Eng;
  nno?: Nno;
  nob?: Nob;
  smi?: Smi;
  ara?: Ara;
  aze?: Aze;
  est?: Est;
  por?: Por;
  pov?: Pov;
  msa?: Msa;
  ita?: Ita;
  ces?: Ces;
  slk?: Slk;
  kor?: Kor;
  sqi?: Sqi;
  gil?: Gil;
  fil?: Fil;
  lit?: Lit;
  crs?: Crs;
  fra?: Fra;
  aym?: Aym;
  grn?: Grn;
  que?: Que;
  mlt?: Mlt;
  ell?: Ell;
  kaz?: Kaz;
  rus?: Rus;
  bos?: Bos;
  hrv?: Hrv;
  srp?: Srp;
  fij?: Fij;
  hif?: Hif;
  cnr?: Cnr;
  ssw?: Ssw;
  zdj?: Zdj;
  pau?: Pau;
  dan?: Dan;
  heb?: Heb;
  tuk?: Tuk;
  ukr?: Ukr;
  tgk?: Tgk;
  arc?: Arc;
  ckb?: Ckb;
  swa?: Swa;
  bwg?: Bwg;
  kck?: Kck;
  khi?: Khi;
  ndc?: Ndc;
  nde?: Nde;
  nya?: Nya;
  sna?: Sna;
  sot?: Sot;
  toi?: Toi;
  tsn?: Tsn;
  tso?: Tso;
  ven?: Ven;
  xho?: Xho;
  zib?: Zib;
  hat?: Hat;
  swe?: Swe;
  lao?: Lao;
  cat?: Cat;
  tur?: Tur;
  fin?: Fin;
  ber?: Ber;
  khm?: Khm;
  kin?: Kin;
  ben?: Ben;
  hin?: Hin;
  tam?: Tam;
  kon?: Kon;
  lin?: Lin;
  bul?: Bul;
  hmo?: Hmo;
  tpi?: Tpi;
  ron?: Ron;
  amh?: Amh;
  sin?: Sin;
  sag?: Sag;
  hye?: Hye;
  gsw?: Gsw;
  roh?: Roh;
  fas?: Fas;
  som?: Som;
  bar?: Bar;
  ton?: Ton;
  tha?: Tha;
  tet?: Tet;
  afr?: Afr;
  nbl?: Nbl;
  nso?: Nso;
  zul?: Zul;
  jam?: Jam;
  mya?: Mya;
  mfe?: Mfe;
  mri?: Mri;
  nzs?: Nzs;
  mkd?: Mkd;
  mah?: Mah;
  bjz?: Bjz;
  mlg?: Mlg;
  lat?: Lat;
  ind?: Ind;
  isl?: Isl;
  zho?: Zho;
  deu?: Deu;
  her?: Her;
  hgm?: Hgm;
  kwn?: Kwn;
  loz?: Loz;
  ndo?: Ndo;
  prs?: Prs;
  pus?: Pus;
  bel?: Bel;
  kat?: Kat;
  urd?: Urd;
  jpn?: Jpn;
  lua?: Lua;
  gle?: Gle;
  vie?: Vie;
  lav?: Lav;
  smo?: Smo;
  mon?: Mon;
  slv?: Slv;
  nld?: Nld;
  hun?: Hun;
  nep?: Nep;
  dzo?: Dzo;
  tir?: Tir;
  div?: Div;
  ltz?: Ltz;
  nau?: Nau;
  bis?: Bis;
  run?: Run;
  tvl?: Tvl;
  uzb?: Uzb;
  kir?: Kir;
  pol?: Pol;
}

export interface Spa {
  official: string;
  common: string;
}

export interface Eng {
  official: string;
  common: string;
}

export interface Nno {
  official: string;
  common: string;
}

export interface Nob {
  official: string;
  common: string;
}

export interface Smi {
  official: string;
  common: string;
}

export interface Ara {
  official: string;
  common: string;
}

export interface Aze {
  official: string;
  common: string;
}

export interface Est {
  official: string;
  common: string;
}

export interface Por {
  official: string;
  common: string;
}

export interface Pov {
  official: string;
  common: string;
}

export interface Msa {
  official: string;
  common: string;
}

export interface Ita {
  official: string;
  common: string;
}

export interface Ces {
  official: string;
  common: string;
}

export interface Slk {
  official: string;
  common: string;
}

export interface Kor {
  official: string;
  common: string;
}

export interface Sqi {
  official: string;
  common: string;
}

export interface Gil {
  official: string;
  common: string;
}

export interface Fil {
  official: string;
  common: string;
}

export interface Lit {
  official: string;
  common: string;
}

export interface Crs {
  official: string;
  common: string;
}

export interface Fra {
  official: string;
  common: string;
}

export interface Aym {
  official: string;
  common: string;
}

export interface Grn {
  official: string;
  common: string;
}

export interface Que {
  official: string;
  common: string;
}

export interface Mlt {
  official: string;
  common: string;
}

export interface Ell {
  official: string;
  common: string;
}

export interface Kaz {
  official: string;
  common: string;
}

export interface Rus {
  official: string;
  common: string;
}

export interface Bos {
  official: string;
  common: string;
}

export interface Hrv {
  official: string;
  common: string;
}

export interface Srp {
  official: string;
  common: string;
}

export interface Fij {
  official: string;
  common: string;
}

export interface Hif {
  official: string;
  common: string;
}

export interface Cnr {
  official: string;
  common: string;
}

export interface Ssw {
  official: string;
  common: string;
}

export interface Zdj {
  official: string;
  common: string;
}

export interface Pau {
  official: string;
  common: string;
}

export interface Dan {
  official: string;
  common: string;
}

export interface Heb {
  official: string;
  common: string;
}

export interface Tuk {
  official: string;
  common: string;
}

export interface Ukr {
  official: string;
  common: string;
}

export interface Tgk {
  official: string;
  common: string;
}

export interface Arc {
  official: string;
  common: string;
}

export interface Ckb {
  official: string;
  common: string;
}

export interface Swa {
  official: string;
  common: string;
}

export interface Bwg {
  official: string;
  common: string;
}

export interface Kck {
  official: string;
  common: string;
}

export interface Khi {
  official: string;
  common: string;
}

export interface Ndc {
  official: string;
  common: string;
}

export interface Nde {
  official: string;
  common: string;
}

export interface Nya {
  official: string;
  common: string;
}

export interface Sna {
  official: string;
  common: string;
}

export interface Sot {
  official: string;
  common: string;
}

export interface Toi {
  official: string;
  common: string;
}

export interface Tsn {
  official: string;
  common: string;
}

export interface Tso {
  official: string;
  common: string;
}

export interface Ven {
  official: string;
  common: string;
}

export interface Xho {
  official: string;
  common: string;
}

export interface Zib {
  official: string;
  common: string;
}

export interface Hat {
  official: string;
  common: string;
}

export interface Swe {
  official: string;
  common: string;
}

export interface Lao {
  official: string;
  common: string;
}

export interface Cat {
  official: string;
  common: string;
}

export interface Tur {
  official: string;
  common: string;
}

export interface Fin {
  official: string;
  common: string;
}

export interface Ber {
  official: string;
  common: string;
}

export interface Khm {
  official: string;
  common: string;
}

export interface Kin {
  official: string;
  common: string;
}

export interface Ben {
  official: string;
  common: string;
}

export interface Hin {
  official: string;
  common: string;
}

export interface Tam {
  official: string;
  common: string;
}

export interface Kon {
  official: string;
  common: string;
}

export interface Lin {
  official: string;
  common: string;
}

export interface Bul {
  official: string;
  common: string;
}

export interface Hmo {
  official: string;
  common: string;
}

export interface Tpi {
  official: string;
  common: string;
}

export interface Ron {
  official: string;
  common: string;
}

export interface Amh {
  official: string;
  common: string;
}

export interface Sin {
  official: string;
  common: string;
}

export interface Sag {
  official: string;
  common: string;
}

export interface Hye {
  official: string;
  common: string;
}

export interface Gsw {
  official: string;
  common: string;
}

export interface Roh {
  official: string;
  common: string;
}

export interface Fas {
  official: string;
  common: string;
}

export interface Som {
  official: string;
  common: string;
}

export interface Bar {
  official: string;
  common: string;
}

export interface Ton {
  official: string;
  common: string;
}

export interface Tha {
  official: string;
  common: string;
}

export interface Tet {
  official: string;
  common: string;
}

export interface Afr {
  official: string;
  common: string;
}

export interface Nbl {
  official: string;
  common: string;
}

export interface Nso {
  official: string;
  common: string;
}

export interface Zul {
  official: string;
  common: string;
}

export interface Jam {
  official: string;
  common: string;
}

export interface Mya {
  official: string;
  common: string;
}

export interface Mfe {
  official: string;
  common: string;
}

export interface Mri {
  official: string;
  common: string;
}

export interface Nzs {
  official: string;
  common: string;
}

export interface Mkd {
  official: string;
  common: string;
}

export interface Mah {
  official: string;
  common: string;
}

export interface Bjz {
  official: string;
  common: string;
}

export interface Mlg {
  official: string;
  common: string;
}

export interface Lat {
  official: string;
  common: string;
}

export interface Ind {
  official: string;
  common: string;
}

export interface Isl {
  official: string;
  common: string;
}

export interface Zho {
  official: string;
  common: string;
}

export interface Deu {
  official: string;
  common: string;
}

export interface Her {
  official: string;
  common: string;
}

export interface Hgm {
  official: string;
  common: string;
}

export interface Kwn {
  official: string;
  common: string;
}

export interface Loz {
  official: string;
  common: string;
}

export interface Ndo {
  official: string;
  common: string;
}

export interface Prs {
  official: string;
  common: string;
}

export interface Pus {
  official: string;
  common: string;
}

export interface Bel {
  official: string;
  common: string;
}

export interface Kat {
  official: string;
  common: string;
}

export interface Urd {
  official: string;
  common: string;
}

export interface Jpn {
  official: string;
  common: string;
}

export interface Lua {
  official: string;
  common: string;
}

export interface Gle {
  official: string;
  common: string;
}

export interface Vie {
  official: string;
  common: string;
}

export interface Lav {
  official: string;
  common: string;
}

export interface Smo {
  official: string;
  common: string;
}

export interface Mon {
  official: string;
  common: string;
}

export interface Slv {
  official: string;
  common: string;
}

export interface Nld {
  official: string;
  common: string;
}

export interface Hun {
  official: string;
  common: string;
}

export interface Nep {
  official: string;
  common: string;
}

export interface Dzo {
  official: string;
  common: string;
}

export interface Tir {
  official: string;
  common: string;
}

export interface Div {
  official: string;
  common: string;
}

export interface Ltz {
  official: string;
  common: string;
}

export interface Nau {
  official: string;
  common: string;
}

export interface Bis {
  official: string;
  common: string;
}

export interface Run {
  official: string;
  common: string;
}

export interface Tvl {
  official: string;
  common: string;
}

export interface Uzb {
  official: string;
  common: string;
}

export interface Kir {
  official: string;
  common: string;
}

export interface Pol {
  official: string;
  common: string;
}

export interface Currencies {
  DOP?: Dop;
  GYD?: Gyd;
  NOK?: Nok;
  AED?: Aed;
  AZN?: Azn;
  EUR?: Eur;
  XOF?: Xof;
  AOA?: Aoa;
  BND?: Bnd;
  SGD?: Sgd;
  CZK?: Czk;
  NIO?: Nio;
  KPW?: Kpw;
  SYP?: Syp;
  BHD?: Bhd;
  ALL?: All;
  AUD?: Aud;
  KID?: Kid;
  MZN?: Mzn;
  PHP?: Php;
  COP?: Cop;
  SCR?: Scr;
  BOB?: Bob;
  XCD?: Xcd;
  KZT?: Kzt;
  BAM?: Bam;
  FJD?: Fjd;
  SAR?: Sar;
  SZL?: Szl;
  ZAR?: Zar;
  KMF?: Kmf;
  GTQ?: Gtq;
  USD?: Usd;
  GBP?: Gbp;
  DKK?: Dkk;
  DJF?: Djf;
  ILS?: Ils;
  TMT?: Tmt;
  UAH?: Uah;
  SBD?: Sbd;
  HNL?: Hnl;
  TJS?: Tjs;
  IQD?: Iqd;
  UGX?: Ugx;
  RUB?: Rub;
  ZWL?: Zwl;
  SDG?: Sdg;
  HTG?: Htg;
  SEK?: Sek;
  LAK?: Lak;
  TRY?: Try;
  LSL?: Lsl;
  GHS?: Ghs;
  MAD?: Mad;
  UYU?: Uyu;
  CLP?: Clp;
  BBD?: Bbd;
  KHR?: Khr;
  RWF?: Rwf;
  TTD?: Ttd;
  STN?: Stn;
  BDT?: Bdt;
  INR?: Inr;
  XAF?: Xaf;
  OMR?: Omr;
  PYG?: Pyg;
  BGN?: Bgn;
  BWP?: Bwp;
  VES?: Ves;
  PGK?: Pgk;
  MDL?: Mdl;
  BRL?: Brl;
  LBP?: Lbp;
  YER?: Yer;
  GMD?: Gmd;
  ETB?: Etb;
  LKR?: Lkr;
  DZD?: Dzd;
  AMD?: Amd;
  CHF?: Chf;
  PEN?: Pen;
  IRR?: Irr;
  ZMW?: Zmw;
  SOS?: Sos;
  TOP?: Top;
  CVE?: Cve;
  THB?: Thb;
  MWK?: Mwk;
  JMD?: Jmd;
  MMK?: Mmk;
  NGN?: Ngn;
  MRU?: Mru;
  MUR?: Mur;
  NZD?: Nzd;
  ARS?: Ars;
  CRC?: Crc;
  MKD?: Mkd2;
  BZD?: Bzd;
  KES?: Kes;
  JOD?: Jod;
  MGA?: Mga;
  IDR?: Idr;
  ISK?: Isk;
  MYR?: Myr;
  MXN?: Mxn;
  NAD?: Nad;
  AFN?: Afn;
  BYN?: Byn;
  TZS?: Tzs;
  GEL?: Gel;
  PKR?: Pkr;
  KWD?: Kwd;
  PAB?: Pab;
  JPY?: Jpy;
  CDF?: Cdf;
  CNY?: Cny;
  LYD?: Lyd;
  RON?: Ron2;
  EGP?: Egp;
  VND?: Vnd;
  TND?: Tnd;
  WST?: Wst;
  MNT?: Mnt;
  QAR?: Qar;
  CUC?: Cuc;
  CUP?: Cup;
  GNF?: Gnf;
  BSD?: Bsd;
  KRW?: Krw;
  CAD?: Cad;
  SSP?: Ssp;
  SRD?: Srd;
  HUF?: Huf;
  NPR?: Npr;
  LRD?: Lrd;
  BTN?: Btn;
  SLE?: Sle;
  ERN?: Ern;
  MVR?: Mvr;
  VUV?: Vuv;
  RSD?: Rsd;
  BIF?: Bif;
  TVD?: Tvd;
  UZS?: Uzs;
  KGS?: Kgs;
  PLN?: Pln;
}

export interface Dop {
  symbol: string;
  name: string;
}

export interface Gyd {
  symbol: string;
  name: string;
}

export interface Nok {
  symbol: string;
  name: string;
}

export interface Aed {
  symbol: string;
  name: string;
}

export interface Azn {
  symbol: string;
  name: string;
}

export interface Eur {
  symbol: string;
  name: string;
}

export interface Xof {
  symbol: string;
  name: string;
}

export interface Aoa {
  symbol: string;
  name: string;
}

export interface Bnd {
  symbol: string;
  name: string;
}

export interface Sgd {
  symbol: string;
  name: string;
}

export interface Czk {
  symbol: string;
  name: string;
}

export interface Nio {
  symbol: string;
  name: string;
}

export interface Kpw {
  symbol: string;
  name: string;
}

export interface Syp {
  symbol: string;
  name: string;
}

export interface Bhd {
  symbol: string;
  name: string;
}

export interface All {
  symbol: string;
  name: string;
}

export interface Aud {
  symbol: string;
  name: string;
}

export interface Kid {
  symbol: string;
  name: string;
}

export interface Mzn {
  symbol: string;
  name: string;
}

export interface Php {
  symbol: string;
  name: string;
}

export interface Cop {
  symbol: string;
  name: string;
}

export interface Scr {
  symbol: string;
  name: string;
}

export interface Bob {
  symbol: string;
  name: string;
}

export interface Xcd {
  symbol: string;
  name: string;
}

export interface Kzt {
  symbol: string;
  name: string;
}

export interface Bam {
  symbol: string;
  name: string;
}

export interface Fjd {
  symbol: string;
  name: string;
}

export interface Sar {
  symbol: string;
  name: string;
}

export interface Szl {
  symbol: string;
  name: string;
}

export interface Zar {
  symbol: string;
  name: string;
}

export interface Kmf {
  symbol: string;
  name: string;
}

export interface Gtq {
  symbol: string;
  name: string;
}

export interface Usd {
  symbol: string;
  name: string;
}

export interface Gbp {
  symbol: string;
  name: string;
}

export interface Dkk {
  symbol: string;
  name: string;
}

export interface Djf {
  symbol: string;
  name: string;
}

export interface Ils {
  symbol: string;
  name: string;
}

export interface Tmt {
  symbol: string;
  name: string;
}

export interface Uah {
  symbol: string;
  name: string;
}

export interface Sbd {
  symbol: string;
  name: string;
}

export interface Hnl {
  symbol: string;
  name: string;
}

export interface Tjs {
  symbol: string;
  name: string;
}

export interface Iqd {
  symbol: string;
  name: string;
}

export interface Ugx {
  symbol: string;
  name: string;
}

export interface Rub {
  symbol: string;
  name: string;
}

export interface Zwl {
  symbol: string;
  name: string;
}

export interface Sdg {
  symbol: string;
  name: string;
}

export interface Htg {
  symbol: string;
  name: string;
}

export interface Sek {
  symbol: string;
  name: string;
}

export interface Lak {
  symbol: string;
  name: string;
}

export interface Try {
  symbol: string;
  name: string;
}

export interface Lsl {
  symbol: string;
  name: string;
}

export interface Ghs {
  symbol: string;
  name: string;
}

export interface Mad {
  symbol: string;
  name: string;
}

export interface Uyu {
  symbol: string;
  name: string;
}

export interface Clp {
  symbol: string;
  name: string;
}

export interface Bbd {
  symbol: string;
  name: string;
}

export interface Khr {
  symbol: string;
  name: string;
}

export interface Rwf {
  symbol: string;
  name: string;
}

export interface Ttd {
  symbol: string;
  name: string;
}

export interface Stn {
  symbol: string;
  name: string;
}

export interface Bdt {
  symbol: string;
  name: string;
}

export interface Inr {
  symbol: string;
  name: string;
}

export interface Xaf {
  symbol: string;
  name: string;
}

export interface Omr {
  symbol: string;
  name: string;
}

export interface Pyg {
  symbol: string;
  name: string;
}

export interface Bgn {
  symbol: string;
  name: string;
}

export interface Bwp {
  symbol: string;
  name: string;
}

export interface Ves {
  symbol: string;
  name: string;
}

export interface Pgk {
  symbol: string;
  name: string;
}

export interface Mdl {
  symbol: string;
  name: string;
}

export interface Brl {
  symbol: string;
  name: string;
}

export interface Lbp {
  symbol: string;
  name: string;
}

export interface Yer {
  symbol: string;
  name: string;
}

export interface Gmd {
  symbol: string;
  name: string;
}

export interface Etb {
  symbol: string;
  name: string;
}

export interface Lkr {
  symbol: string;
  name: string;
}

export interface Dzd {
  symbol: string;
  name: string;
}

export interface Amd {
  symbol: string;
  name: string;
}

export interface Chf {
  symbol: string;
  name: string;
}

export interface Pen {
  symbol: string;
  name: string;
}

export interface Irr {
  symbol: string;
  name: string;
}

export interface Zmw {
  symbol: string;
  name: string;
}

export interface Sos {
  symbol: string;
  name: string;
}

export interface Top {
  symbol: string;
  name: string;
}

export interface Cve {
  symbol: string;
  name: string;
}

export interface Thb {
  symbol: string;
  name: string;
}

export interface Mwk {
  symbol: string;
  name: string;
}

export interface Jmd {
  symbol: string;
  name: string;
}

export interface Mmk {
  symbol: string;
  name: string;
}

export interface Ngn {
  symbol: string;
  name: string;
}

export interface Mru {
  symbol: string;
  name: string;
}

export interface Mur {
  symbol: string;
  name: string;
}

export interface Nzd {
  symbol: string;
  name: string;
}

export interface Ars {
  symbol: string;
  name: string;
}

export interface Crc {
  symbol: string;
  name: string;
}

export interface Mkd2 {
  symbol: string;
  name: string;
}

export interface Bzd {
  symbol: string;
  name: string;
}

export interface Kes {
  symbol: string;
  name: string;
}

export interface Jod {
  symbol: string;
  name: string;
}

export interface Mga {
  symbol: string;
  name: string;
}

export interface Idr {
  symbol: string;
  name: string;
}

export interface Isk {
  symbol: string;
  name: string;
}

export interface Myr {
  symbol: string;
  name: string;
}

export interface Mxn {
  symbol: string;
  name: string;
}

export interface Nad {
  symbol: string;
  name: string;
}

export interface Afn {
  symbol: string;
  name: string;
}

export interface Byn {
  symbol: string;
  name: string;
}

export interface Tzs {
  symbol: string;
  name: string;
}

export interface Gel {
  symbol: string;
  name: string;
}

export interface Pkr {
  symbol: string;
  name: string;
}

export interface Kwd {
  symbol: string;
  name: string;
}

export interface Pab {
  symbol: string;
  name: string;
}

export interface Jpy {
  symbol: string;
  name: string;
}

export interface Cdf {
  symbol: string;
  name: string;
}

export interface Cny {
  symbol: string;
  name: string;
}

export interface Lyd {
  symbol: string;
  name: string;
}

export interface Ron2 {
  symbol: string;
  name: string;
}

export interface Egp {
  symbol: string;
  name: string;
}

export interface Vnd {
  symbol: string;
  name: string;
}

export interface Tnd {
  symbol: string;
  name: string;
}

export interface Wst {
  symbol: string;
  name: string;
}

export interface Mnt {
  symbol: string;
  name: string;
}

export interface Qar {
  symbol: string;
  name: string;
}

export interface Cuc {
  symbol: string;
  name: string;
}

export interface Cup {
  symbol: string;
  name: string;
}

export interface Gnf {
  symbol: string;
  name: string;
}

export interface Bsd {
  symbol: string;
  name: string;
}

export interface Krw {
  symbol: string;
  name: string;
}

export interface Cad {
  symbol: string;
  name: string;
}

export interface Ssp {
  symbol: string;
  name: string;
}

export interface Srd {
  symbol: string;
  name: string;
}

export interface Huf {
  symbol: string;
  name: string;
}

export interface Npr {
  symbol: string;
  name: string;
}

export interface Lrd {
  symbol: string;
  name: string;
}

export interface Btn {
  symbol: string;
  name: string;
}

export interface Sle {
  symbol: string;
  name: string;
}

export interface Ern {
  symbol: string;
  name: string;
}

export interface Mvr {
  symbol: string;
  name: string;
}

export interface Vuv {
  symbol: string;
  name: string;
}

export interface Rsd {
  symbol: string;
  name: string;
}

export interface Bif {
  symbol: string;
  name: string;
}

export interface Tvd {
  symbol: string;
  name: string;
}

export interface Uzs {
  symbol: string;
  name: string;
}

export interface Kgs {
  symbol: string;
  name: string;
}

export interface Pln {
  symbol: string;
  name: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  spa?: string;
  eng?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  ara?: string;
  aze?: string;
  est?: string;
  por?: string;
  pov?: string;
  msa?: string;
  ita?: string;
  cat?: string;
  ces?: string;
  slk?: string;
  kor?: string;
  sqi?: string;
  gil?: string;
  fil?: string;
  lit?: string;
  crs?: string;
  fra?: string;
  aym?: string;
  grn?: string;
  que?: string;
  mlt?: string;
  ell?: string;
  kaz?: string;
  rus?: string;
  bos?: string;
  hrv?: string;
  srp?: string;
  fij?: string;
  hif?: string;
  cnr?: string;
  ssw?: string;
  zdj?: string;
  pau?: string;
  dan?: string;
  heb?: string;
  tuk?: string;
  ukr?: string;
  tgk?: string;
  arc?: string;
  ckb?: string;
  swa?: string;
  bwg?: string;
  kck?: string;
  khi?: string;
  ndc?: string;
  nde?: string;
  nya?: string;
  sna?: string;
  sot?: string;
  toi?: string;
  tsn?: string;
  tso?: string;
  ven?: string;
  xho?: string;
  zib?: string;
  hat?: string;
  swe?: string;
  lao?: string;
  tur?: string;
  fin?: string;
  ber?: string;
  khm?: string;
  kin?: string;
  ben?: string;
  hin?: string;
  tam?: string;
  kon?: string;
  lin?: string;
  bul?: string;
  hmo?: string;
  tpi?: string;
  ron?: string;
  amh?: string;
  sin?: string;
  sag?: string;
  hye?: string;
  gsw?: string;
  roh?: string;
  fas?: string;
  som?: string;
  deu?: string;
  ton?: string;
  tha?: string;
  tet?: string;
  afr?: string;
  nbl?: string;
  nso?: string;
  zul?: string;
  jam?: string;
  mya?: string;
  mfe?: string;
  mri?: string;
  nzs?: string;
  mkd?: string;
  mah?: string;
  bjz?: string;
  mlg?: string;
  lat?: string;
  ind?: string;
  isl?: string;
  zho?: string;
  her?: string;
  hgm?: string;
  kwn?: string;
  loz?: string;
  ndo?: string;
  prs?: string;
  pus?: string;
  bel?: string;
  kat?: string;
  urd?: string;
  eus?: string;
  glc?: string;
  jpn?: string;
  lua?: string;
  gle?: string;
  vie?: string;
  lav?: string;
  smo?: string;
  mon?: string;
  slv?: string;
  nld?: string;
  hun?: string;
  nep?: string;
  dzo?: string;
  tir?: string;
  div?: string;
  ltz?: string;
  nau?: string;
  bis?: string;
  run?: string;
  tvl?: string;
  uzb?: string;
  kir?: string;
  pol?: string;
}

export interface Demonyms {
  eng: Eng2;
  fra: Fra2;
}

export interface Eng2 {
  f: string;
  m: string;
}

export interface Fra2 {
  f: string;
  m: string;
}

export interface Translations {
  ara: Ara2;
  bre: Bre;
  ces: Ces2;
  cym: Cym;
  deu: Deu2;
  est: Est2;
  fin: Fin2;
  fra: Fra3;
  hrv: Hrv2;
  hun: Hun2;
  ind?: Ind2;
  ita: Ita2;
  jpn?: Jpn2;
  kor: Kor2;
  nld: Nld2;
  per?: Per;
  pol: Pol2;
  por: Por2;
  rus: Rus2;
  slk: Slk2;
  spa: Spa2;
  srp: Srp2;
  swe: Swe2;
  tur: Tur2;
  urd: Urd2;
  zho?: Zho2;
}

export interface Ara2 {
  official: string;
  common: string;
}

export interface Bre {
  official: string;
  common: string;
}

export interface Ces2 {
  official: string;
  common: string;
}

export interface Cym {
  official: string;
  common: string;
}

export interface Deu2 {
  official: string;
  common: string;
}

export interface Est2 {
  official: string;
  common: string;
}

export interface Fin2 {
  official: string;
  common: string;
}

export interface Fra3 {
  official: string;
  common: string;
}

export interface Hrv2 {
  official: string;
  common: string;
}

export interface Hun2 {
  official: string;
  common: string;
}

export interface Ind2 {
  official: string;
  common: string;
}

export interface Ita2 {
  official: string;
  common: string;
}

export interface Jpn2 {
  official: string;
  common: string;
}

export interface Kor2 {
  official: string;
  common: string;
}

export interface Nld2 {
  official: string;
  common: string;
}

export interface Per {
  official: string;
  common: string;
}

export interface Pol2 {
  official: string;
  common: string;
}

export interface Por2 {
  official: string;
  common: string;
}

export interface Rus2 {
  official: string;
  common: string;
}

export interface Slk2 {
  official: string;
  common: string;
}

export interface Spa2 {
  official: string;
  common: string;
}

export interface Srp2 {
  official: string;
  common: string;
}

export interface Swe2 {
  official: string;
  common: string;
}

export interface Tur2 {
  official: string;
  common: string;
}

export interface Urd2 {
  official: string;
  common: string;
}

export interface Zho2 {
  official: string;
  common: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Gini {
  '2018'?: number;
  '2019'?: number;
  '2003'?: number;
  '2010'?: number;
  '2013'?: number;
  '2017'?: number;
  '2012'?: number;
  '2016'?: number;
  '1999'?: number;
  '2015'?: number;
  '2009'?: number;
  '2014'?: number;
  '2011'?: number;
  '2004'?: number;
  '2008'?: number;
  '2006'?: number;
  '1992'?: number;
  '1998'?: number;
  '2005'?: number;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface PostalCode {
  format?: string;
  regex?: string;
}
