var word_list = ['abate', 'abdicate', 'aberrant', 'abeyance', 'abject', 'abjure', 'abscission', 'abscond', 'abstemious', 'abstinence', 'abysmal', 'accretion', 'accrue', 'adamant', 'adjunct', 'admonish', 'adulterate', 'aesthetic', 'affected', 'affinity', 'aggrandize', 'aggregate', 'alacrity', 'alchemy', 'allay', 'alleviate', 'alloy', 'allure', 'amalgamate', 'ambiguous', 'ambivalence', 'ambrosia', 'ameliorate', 'amenable', 'amenity', 'amulet', 'anachronism', 'analgesic', 'analogous', 'anarchy', 'anodyne', 'anomalous', 'antecedent', 'antediluvian', 'antipathy', 'apathy', 'apex', 'apogee', 'apothegm', 'appease', 'appellation', 'apposite', 'apprise', 'approbation', 'appropriate', 'apropos', 'arabesque', 'archeology', 'ardor', 'arduous', 'argot', 'arrest', 'artifact', 'artless', 'ascetic', 'asperity', 'aspersion', 'assiduous', 'assuage', 'astringent', 'asylum', 'atavism', 'attenuate', 'audacious', 'austere', 'autonomous', 'avarice', 'aver', 'avocation', 'avuncular', 'axiomatic', 'bacchanalian', 'banal', 'banter', 'bard', 'bawdy', 'beatify', 'bedizen', 'behemoth', 'belie', 'beneficent', 'bifurcate', 'blandishment', 'blase', 'bolster', 'bombastic', 'boorish', 'bovine', 'brazen', 'broach', 'bucolic', 'burgeon', 'burnish', 'buttress', 'cacophonous', 'cadge', 'callous', 'calumny', 'canard', 'canon', 'cant', 'cantankerous', 'capricious', 'captious', 'cardinal', 'carnal', 'carping', 'cartography', 'caste', 'castigation', 'cataclysm', 'catalyst', 'categorical', 'caucus', 'causal', 'caustic', 'celestial', 'centrifugal', 'centripetal', 'champion', 'chasten', 'chicanery', 'chivalry', 'churlish', 'circuitous', 'clairvoyant', 'clamor', 'clique', 'coagulate', 'cloister', 'coalesce', 'coda', 'codify', 'cognizant', 'collage', 'commensurate', 'compendium', 'complacent', 'complaisant', 'complement', 'compliant', 'compunction', 'concave', 'conciliatory', 'concoct', 'concomitant', 'condone', 'confound', 'congenial', 'conjugal', 'connoisseur', 'conscript', 'consecrate', 'contend', 'contentious', 'continence', 'contrite', 'contumacious', 'conundrum', 'contiguous', 'convention', 'converge', 'convex', 'convivial', 'convoluted', 'copious', 'coquette', 'cornucopia', 'cosmology', 'covert', 'covetous', 'cozen', 'craven', 'credence', 'credo', 'daunt', 'dearth', 'debauchery', 'decorum', 'defame', 'default', 'deference', 'defunct', 'delineate', 'demographic', 'demotic', 'demur', 'denigrate', 'denizen', 'denouement', 'deride', 'derivative', 'desiccate', 'desuetude', 'desultory', 'deterrent', 'detraction', 'diaphanous', 'diatribe', 'dichotomy', 'diffidence', 'diffuse', 'digression', 'dirge', 'disabuse', 'discerning', 'discomfit', 'discordant', 'discredit', 'discrepancy', 'discrete', 'discretion', 'disingenuous', 'disinterested', 'disjointed', 'dismiss', 'disparage', 'disparate', 'dissemble', 'disseminate', 'dissident', 'dissolution', 'dissonance', 'distend', 'distill', 'distrait', 'diverge', 'divest', 'divulge', 'doctrinaire', 'document', 'doggerel', 'dogmatic', 'dormant', 'dross', 'dupe', 'ebullient', 'eclectic', 'effervescence', 'effete', 'efficacy', 'effrontery', 'egoism', 'egotistical', 'elegy', 'elicit', 'elixir', 'elysian', 'emaciated', 'embellish', 'emollient', 'empirical', 'emulate', 'encomium', 'endemic', 'enervate', 'engender', 'enhance', 'entomology', 'enuciate', 'ephemeral', 'epistemology', 'equable', 'equanimity', 'equivocation', 'errant', 'erudite', 'esoteric', 'essay', 'estimable', 'ethnocentric', 'etiology', 'etymology', 'eugenics', 'eulogy', 'euphemism', 'euphoria', 'euthanasia', 'evince', 'evocative', 'exacerbate', 'exact', 'exculpate', 'execrable', 'exhort', 'exigency', 'existential', 'exorcise', 'expatiate', 'expatriate', 'expiate', 'explicate', 'expository', 'extant', 'extemporaneous', 'extirpate', 'extraneous', 'extrapolation', 'extrinsic', 'facetious', 'facilitate', 'factotum', 'fallacious', 'fallow', 'fatuous', 'fauna', 'fawning', 'felicitous', 'feral', 'fervor', 'fetid', 'fetter', 'fiat', 'fidelity', 'filibuster', 'finesse', 'fissure', 'flag', 'fledgling', 'flora', 'florid', 'flourish', 'flout', 'flux', 'foment', 'forbearance', 'forestall', 'formidable', 'forswear', 'founder', 'fracas', 'fractious', 'fresco', 'frieze', 'froward', 'frugality', 'fulminate', 'fulsome', 'fusion', 'futile', 'gainsay', 'gambol', 'garrulous', 'gauche', 'geniality', 'gerrymander', 'glib', 'goad', 'gossamer', 'gouge', 'grandiloquent', 'gregarious', 'grouse', 'guileless', 'guise', 'gullible', 'gustatory', 'halcyon', 'hallowed', 'harangue', 'harrowing', 'herbivorous', 'hermetic', 'heterodox', 'hieroglyphics', 'hirsute', 'histrionic', 'homeostasis', 'homily', 'homogeneous', 'hyperbole', 'iconoclastic', 'idolatry', 'igneous', 'imbroglio', 'immutable', 'impair', 'impassive', 'impecunious', 'impede', 'impermeable', 'imperturbable', 'impervious', 'impinge', 'implacable', 'implausible', 'implicit', 'implode', 'imprecation', 'impute', 'inadvertently', 'incarnate', 'inchoate', 'incongruity', 'inconsequential', 'incorporate', 'incursion', 'indeterminate', 'indigence', 'indolent', 'ineluctable', 'inert', 'ingenuous', 'inherent', 'innocuous', 'insensible', 'insinuate', 'insipid', 'insouciant', 'insularity', 'insuperable', 'intangible', 'interdict', 'internecine', 'interpolate', 'interregnum', 'intimate', 'intractable', 'intransigence', 'introspective', 'inundate', 'inured', 'invective', 'inveigh', 'inveigle', 'inveterate', 'invidious', 'irascible', 'irresolute', 'itinerant', 'itinerary', 'jaundiced', 'jibe', 'jocose', 'juggernaut', 'junta', 'juxtapose', 'kudos', 'labile', 'laconic', 'lambaste', 'lascivious', 'lassitude', 'latent', 'laud', 'lethargic', 'levee', 'levity', 'liberal', 'libertine', 'libido', 'lilliputian', 'limn', 'limpid', 'linguistic', 'litany', 'literati', 'litigation', 'log', 'loquacious', 'lucid', 'lucre', 'luminous', 'lustrous', 'machiavellian', 'machinations', 'maelstrom', 'magnanimity', 'malign', 'malinger', 'malleable', 'maverick', 'megalomania', 'menagerie', 'mendacious', 'mendicant', 'meretricious', 'mesmerize', 'metamorphosis', 'metaphysics', 'meteorological', 'meticulous', 'mettle', 'mettlesome', 'microcosm', 'militate', 'minatory', 'minuscule', 'minutia', 'misanthrope', 'miscellany', 'miscreant', 'misogynist', 'mitigate', 'mnemonic', 'modicum', 'mollify', 'monolithic', 'morose', 'motley', 'multifarious', 'mundane', 'necromancy', 'negate', 'neologism', 'neophyte', 'nexus', 'nonplussed', 'nostalgia', 'nostrum', 'nugatory', 'obdurate', 'obsequious', 'obsequy', 'obviate', 'occlude', 'occult', 'odyssey', 'officious', 'olfactory', 'oligarchy', 'onerous', 'onomatopoeia', 'opprobrium', 'ornithologist', 'oscillate', 'ostentatious', 'overweening', 'paean', 'paleontology', 'pallid', 'panegyric', 'paragon', 'partisan', 'pathological', 'patois', 'paucity', 'pedantic', 'pellucid', 'penchant', 'penurty', 'peregrination', 'peremptory', 'perennial', 'perfidious', 'perfunctory', 'perigee', 'permeable', 'perturb', 'pervasive', 'petulant', 'phlegmatic', 'phoenix', 'physiognomy', 'piety', 'piquant', 'pique', 'placate', 'placid', 'plaintive', 'plasticity', 'platitude', 'platonic', 'plethora', 'plumb', 'plume', 'plummet', 'plutocracy', 'porous', 'poseur', 'pragmatic', 'prate', 'prattle', 'preamble', 'precarious', 'precept', 'precipitate', 'precursor', 'preempt', 'prehensile', 'premonition', 'presage', 'presumptuous', 'preternatural', 'prevaricate', 'primordial', 'pristine', 'probity', 'problematic', 'prodigal', 'profound', 'prohibitive', 'proliferate', 'propitiate', 'propensity', 'propriety', 'proscribe', 'provident', 'puissant', 'punctilious', 'pungent', 'purport', 'pusillanimous', 'quagmire', 'quail', 'qualified', 'qualm', 'query', 'quibble', 'quiescent', 'quorum', 'raconteur', 'rail', 'raiment', 'ramification', 'rarefied', 'rationale', 'rebus', 'recalcitrant', 'recant', 'recluse', 'recondite', 'redoubtable', 'refractory', 'refract', 'refulgent', 'refute', 'regale', 'relegate', 'remonstrate', 'renege', 'reparation', 'repine', 'reprise', 'reproach', 'reprobate', 'repudiate', 'rescind', 'resolution', 'resolve', 'reticent', 'reverent', 'riposte', 'rococo', 'rubric', 'rue', 'ruse', 'sage', 'salacious', 'salubrious', 'salutary', 'sanction', 'sardonic', 'sartorial', 'satiate', 'saturate', 'saturnine', 'satyr', 'savor', 'schematic', 'secrete', 'sedition', 'sedulous', 'seismic', 'sensual', 'sensuous', 'sentient', 'servile', 'sextant', 'shard', 'sidereal', 'simian', 'simile', 'sinecure', 'singular', 'sinuous', 'skeptic', 'sobriety', 'sodden', 'solicitous', 'soliloquy', 'solvent', 'somatic', 'soporific', 'sordid', 'specious', 'spectrum', 'spendthrift', 'sporadic', 'squalor', 'staccato', 'stanch', 'stentorian', 'stigma', 'stint', 'stipulate', 'stolid', 'stratified', 'striated', 'stricture', 'strident', 'strut', 'stultify', 'stupefy', 'stygian', 'subpoena', 'subside', 'substantiate', 'substantive', 'subsume', 'subversive', 'succor', 'suffrage', 'sundry', 'supersede', 'supine', 'supplant', 'suppliant', 'supplicant', 'supposition', 'syllogism', 'sylvan', 'tacit', 'talisman', 'tangential', 'tautology', 'taxonomy', 'tenet', 'tenuous', 'terrestrial', 'theocracy', 'thespian', 'timbre', 'tirade', 'toady', 'tome', 'torpor', 'torque', 'tortuous', 'tout', 'tractable', 'transgression', 'transient', 'translucent', 'travail', 'travesty', 'treatise', 'tremulous', 'trepidation', 'truculence', 'tryst', 'anomie', 'tumid', 'turbid', 'turgid', 'tutelary', 'uncanny', 'undulating', 'unfeigned', 'untenable', 'untoward', 'usury', 'vacillate', 'vacuous', 'valedictory', 'vapid', 'variegated', 'vaunt', 'venal', 'vendetta', 'venerate', 'veracious', 'verbose', 'vertigo', 'vexation', 'viable', 'vindictive', 'virtuoso', 'visage', 'viscous', 'vitiate', 'vituperative', 'vivisection', 'vogue', 'volatile', 'vortex', 'warranted', 'wary', 'welter', 'whimsical', 'whimsy', 'wistful', 'zealot', 'zealotry', 'de facto', 'deviant', 'defer', 'platonic', 'discern', 'bionics', 'heuristic', 'equitable', 'guile', 'reductionistic', 'inertia', 'pathos', 'pedant','the'];


function doHighlight(bodyText, searchTerm, highlightStartTag, highlightEndTag) 
{
  // the highlightStartTag and highlightEndTag parameters are optional
  if ((!highlightStartTag) || (!highlightEndTag)) {
    highlightStartTag = "<font style='color:blue; background-color:yellow;'>";
    highlightEndTag = "</font>";
  }
  
  // find all occurences of the search term in the given text,
  // and add some "highlight" tags to them (we're not using a
  // regular expression search, because we want to filter out
  // matches that occur within HTML tags and script blocks, so
  // we have to do a little extra validation)
  var newText = "";
  var i = -1;
  var lcSearchTerm = searchTerm.toLowerCase();
  var lcBodyText = bodyText.toLowerCase();
    
  while (bodyText.length > 0) {
    i = lcBodyText.indexOf(lcSearchTerm, i+1);
    if (i < 0) {
      newText += bodyText;
      bodyText = "";
    } else {
      // skip anything inside an HTML tag
      if (bodyText.lastIndexOf(">", i) >= bodyText.lastIndexOf("<", i)) {
        // skip anything inside a <script> block
        if (lcBodyText.lastIndexOf("/script>", i) >= lcBodyText.lastIndexOf("<script", i)) {
          newText += bodyText.substring(0, i) + highlightStartTag + bodyText.substr(i, searchTerm.length) + highlightEndTag;
          bodyText = bodyText.substr(i + searchTerm.length);
          lcBodyText = bodyText.toLowerCase();
          i = -1;
        }
      }
    }
  }
  
  return newText;
}


function highlightSearchTerms()
{
  console.log(clicked);
  var highlightStartTag = "<font style='color: black; background-color:yellow;'>";
  var highlightEndTag = "</font>";
    
  var bodyText = document.body.innerHTML;
  for (var i = 0; i < word_list.length; i++) {
    bodyText = doHighlight(bodyText, word_list[i], highlightStartTag, highlightEndTag);
  }
  document.body.innerHTML = bodyText;
  return true;
}


//
//highlightSearchTerms(word_list, true, highlightStartTag, highlightEndTag);

chrome.browserAction.onClicked.addListener(highlightSearchTerms);