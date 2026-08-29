const app = document.getElementById("app");
const toast = document.getElementById("toast");

const translations = {
  en: {
    navHome: "Home", navAcademy: "Academy", navSupport: "Support", navCommunity: "Community", navDashboard: "Dashboard",
    footerTagline: "Empowering Parents. Strengthening Families. Building Better Futures.",
    lowData: "Low-data friendly", langs: "English / French", privacy: "Privacy & Safeguarding",
    heroTitle: "Better parenting, one small step at a time.",
    heroLead: "Parent+ Cameroon gives parents and caregivers short, practical and trustworthy guidance for communication, emotional support, positive discipline and child development.",
    startLearning: "Start learning", exploreAcademy: "Explore the Academy",
    availableIn: "Available in", englishFrench: "English · French", designedFor: "Designed for", mobileLowData: "Mobile & web",
    whatHelp: "What can Parent+ help with?",
    heroBrief: "The platform focuses on positive parenting solutions for Cameroonian families.",
    learn: "Learn", learnDesc: "Short parenting lessons and micro-learning activities.",
    getSupport: "Get support", getSupportDesc: "Practical guidance for common parenting situations.",
    trackProgress: "Track progress", trackProgressDesc: "See lessons completed and learning progress.",
    engage: "Engage", engageDesc: "Community resources and feedback for improvement.",
    builtFor: "Built for real Cameroonian contexts",
    builtForDesc: "Responsive, mobile-first and designed so low-connectivity channels can be added later.",
    createMyProfile: "Create my profile",
    academyTitle: "Learn practical parenting skills",
    academyMuted: "Choose a short module and complete a mini activity.",
    percentCompleted: "% completed", reviewLesson: "Review lesson", startLesson: "Start lesson",
    whyMatters: "Why this matters",
    threeThings: "3 things to try",
    lessonTip: "Parent+ tip:",
    quickCheck: "Quick check",
    quizCorrect: "Correct. Positive parenting combines connection, guidance and respectful limits.",
    quizWrong: "Try again: look for the response that combines empathy and calm guidance.",
    back: "Back", markComplete: "Mark as complete", completed: "Completed ✓",
    getStarted: "Get Started",
    signupTitle: "Join Parent+ Cameroon",
    signupMuted: "Create an account to save your progress and access all lessons.",
    fullName: "Full name", namePlaceholder: "e.g. Marie",
    childAgeLine: "Child age group", years: "years",
    email: "Email address", password: "Password",
    showPassword: "Show password", hidePassword: "Hide password",
    acceptTermsA: "I accept the ", termsWord: "Terms", acceptTermsB: " and the ", privacyWord: "Privacy Policy",
    createAccount: "Create account", alreadyAccount: "Already have an account?", loginLink: "Login",
    loginTitle: "Log in to your account",
    loginBtnLabel: "Login", forgotPassword: "Password forgotten?",
    noAccount: "Not yet an account?", signupLink: "Sign up",
    emailAlreadyUsed: "This email already has an account. Please log in.",
    invalidCredentials: "Incorrect email or password.",
    acceptRequired: "Please accept the terms and privacy policy.",
    passwordShort: "Password must be at least 6 characters.",
    accountCreated: "Account created. Welcome!",
    loggedIn: "You are logged in.",
    termsTitle: "Terms & Privacy Policy",
    termsBody: "Parent+ Cameroon collects only the information needed to provide parenting support. Your data stays on this device. We do not share personal information with third parties.",
    forgotTitle: "Reset your password",
    forgotMuted: "Enter the email linked to your account. In a live version, we would send you a reset link by email.",
    resetSent: "If this email exists, a reset link would be sent to it.",
    sendLink: "Send reset link",
    privacyAlert: "🔒 We only ask for information needed to provide the service. Your data is stored on this device.",
    dashboardEyebrow: "Parent dashboard", welcome: "Welcome,",
    languageLabel: "Language", myProfile: "My profile",
    learningProgress: "Learning progress", lessonsCompleted: "Lessons completed", modulesInPrototype: "Learning modules",
    continueLearning: "Continue learning", allComplete: "You completed all available lessons!",
    continue: "Continue",
    allDone: "🎉 Excellent! You have completed all available lessons. New content is added regularly.",
    dashTipTitle: "Today's parenting tip",
    dashTipText: "Before correcting a behaviour, ask yourself: \"What does my child need right now?\"",
    moreSupport: "Get more support",
    supportTitle: "Guidance for common situations",
    supportMuted: "Practical, evidence-informed guidance for common parenting situations.",
    viewGuidance: "View guidance",
    needFeedback: "Need to share feedback?", feedbackHelps: "Your feedback helps improve the content and the family experience.",
    giveFeedback: "Give feedback",
    communityTitle: "Learn together",
    communityMuted: "Educational campaigns, resources and moderated community engagement.",
    shareFeedback: "Share feedback",
    c1title: "7-day positive communication challenge", c1text: "Try one active-listening habit each day and reflect on what changed.", c1pill: "Campaign",
    c2author: "Education resource", c2title: "Helping children learn at home", c2text: "Simple routines that can support learning without turning home into another classroom.", c2pill: "Resource",
    c3author: "Community partner", c3title: "Parent discussion session", c3text: "Space for announcements from trusted community partners.", c3pill: "Event",
    feedbackEyebrow: "Feedback", feedbackTitle: "Tell us about your experience",
    howSatisfied: "How satisfied are you?", choose: "Choose", verySatisfied: "Very satisfied", satisfied: "Satisfied", neutral: "Neutral", notSatisfied: "Not satisfied",
    whatUseful: "What was useful?", feedbackPlaceholder: "Your feedback...", submitFeedback: "Submit feedback",
    feedbackThanks: "Thank you for your feedback!",
    profileProgress: "of learning modules completed.", logout: "Log out",
    toastProfileFirst: "Create an account first to save your progress.",
    toastLessonDone: "Lesson completed!", toastWelcome: "Welcome to Parent+!",
    toastLoggedOut: "You have been logged out.",
    guidanceEyebrow: "Guidance", backToSupport: "Back to support",
    langChanged: "English selected.",
    langLabel: "English",
    myChildren: "My Children", addChild: "Add a child", addChildTitle: "Add a child",
    editChild: "Edit", deleteChild: "Delete", saveChild: "Save", cancel: "Cancel",
    childName: "Child's name", childAge: "Child's age", childAgeGroup: "Age group",
    selectChild: "Select", childSelected: "Selected",
    progressLabel: "Progress", completedLessonsLabel: "Completed lessons",
    deleteChildConfirm: "Are you sure you want to delete this child?",
    forWhichChild: "For which child?", noChildren: "Add a child to receive personalized recommendations.",
    addFirstChild: "Add your first child",
    recommendedFor: "Recommended for you", recommendedForChild: "Recommended for",
    filterAge: "Age", filterNeed: "Need",
    needCommunication: "Communication", needEmotions: "Emotions", needDiscipline: "Discipline",
    needSchool: "School", needAutonomy: "Independence",
    notifications: "Notifications", markAllRead: "Mark all as read",
    notifNewLesson: "New lesson", notifTip: "Tip of the day", notifProgress: "Progress", notifReminder: "Reminder",
    notifNewLessonMsg: "New lesson available: Positive Communication",
    notifTipMsg: "Discover your parenting tip of the day.",
    notifProgressMsg: "You completed 3 lessons this week.",
    notifReminderMsg: "Continue your learning journey.",
    myRewards: "My Rewards", points: "points",
    badgeFirstStep: "First Step", badgeFirstStepDesc: "First lesson completed",
    badge7Days: "7 Days", badge7DaysDesc: "7 consecutive learning days",
    badgeLearningParent: "Learning Parent", badgeLearningParentDesc: "10 lessons completed",
    badgePositiveComm: "Positive Communication", badgePositiveCommDesc: "Communication module completed",
    badgeLocked: "Locked",
    yourJourney: "Your journey", streak: "Streak", days: "days",
    learningTime: "Learning Time", todayTitle: "Today",
    continuePath: "Continue your path with",
    whatsHappening: "What's happening today?",
    situationTantrums: "My child has frequent tantrums",
    situationScreens: "My child spends too much time on screens",
    situationHomework: "My child has difficulties with homework",
    situationBedtime: "Bedtime is difficult",
    situationArguments: "We argue often",
    situationRelationship: "I want to improve our relationship",
    whatYouCanTry: "What you can try",
    campaigns: "Campaigns", resources: "Resources", events: "Events",
    feedbackConfirmation: "Thank you for your feedback!",
    feedbackConfirmMsg: "Your feedback helps improve Parent+ Cameroon.",
    backToHome: "Back to Home",
    settings: "Settings",
    account: "Account", personalInfo: "Personal Information", changePassword: "Change Password",
    preferences: "Preferences", langSetting: "Language", appearance: "Appearance",
    notifSetting: "Notifications",
    privacySetting: "Privacy", termsSetting: "Terms of Use",
    currentPassword: "Current password", newPassword: "New password", confirmPassword: "Confirm password",
    passwordChanged: "Password changed successfully.",
    profileUpdated: "Profile updated.",
    passwordMismatch: "Passwords do not match.",
    passwordRequired: "Current password is required.",
    darkMode: "Dark mode", lightMode: "Light mode",
    notifReminders: "Learning reminders", notifWeekly: "Weekly summary",
    privacyInfo: "Your data is stored locally on this device. We do not share personal information with third parties.",
    termsInfo: "Parent+ Cameroon is a prototype platform. Content is for educational purposes. By using this platform, you agree to use the guidance responsibly.",
    offlineLessons: "Offline Lessons", offlineLessonsDesc: "Lessons available without internet",
    downloadOffline: "Download for offline", removeOffline: "Remove offline",
    listenLesson: "Listen to this lesson", stopListening: "Stop listening",
    savedLessons: "Saved lessons", profileInfo: "Profile Information",
    noOfflineLessons: "No offline lessons saved yet.",
    noNotifications: "No notifications yet.",
    onboardingEyebrow: "Quick question",
    onboardingTitle: "What would you like to improve with your child?",
    onboardingMuted: "Choose everything that matters to you right now. This helps us tailor lessons and support to your family.",
    onboardingOptionCommunication: "Communication",
    onboardingOptionCommunicationDesc: "Talking, listening and understanding each other better.",
    onboardingOptionEducation: "Education & learning",
    onboardingOptionEducationDesc: "Homework, school success and curiosity.",
    onboardingOptionDiscipline: "Positive discipline",
    onboardingOptionDisciplineDesc: "Setting calm, consistent and respectful limits.",
    onboardingOptionEmotions: "Emotional connection",
    onboardingOptionEmotionsDesc: "Bonding, empathy and managing big feelings.",
    onboardingOptionBehavior: "Managing tantrums & conflict",
    onboardingOptionBehaviorDesc: "Handling difficult moments calmly.",
    onboardingOptionConfidence: "Confidence & self-esteem",
    onboardingOptionConfidenceDesc: "Helping your child feel capable and secure.",
    onboardingOptionScreenTime: "Screen time & habits",
    onboardingOptionScreenTimeDesc: "Healthy routines around devices and daily habits.",
    onboardingOptionHealth: "Health & wellbeing",
    onboardingOptionHealthDesc: "Nutrition, sleep and everyday care.",
    onboardingOptionOther: "Something else",
    onboardingOtherPlaceholder: "Tell us what you'd like to improve...",
    onboardingSubmit: "Submit",
    onboardingSkip: "Skip for now",
    onboardingSelectRequired: "Please choose at least one option or describe what you'd like to improve.",
    onboardingThanksTitle: "Thank you!",
    onboardingThanksMsg: "We are going to help you in your relationship with your child.",
    onboardingToast: "Thank you! We are going to help you in your relationship with your child."
  },
  fr: {
    navHome: "Accueil", navAcademy: "Académie", navSupport: "Soutien", navCommunity: "Communauté", navDashboard: "Tableau de bord",
    footerTagline: "Autonomiser les parents. Renforcer les familles. Construire de meilleurs avenirs.",
    lowData: "Adapté aux faibles données", langs: "Anglais / Français", privacy: "Confidentialité et protection",
    heroTitle: "De meilleures pratiques parentales, pas à pas.",
    heroLead: "Parent+ Cameroun offre aux parents et aux personnes aidantes des conseils courts, pratiques et fiables pour la communication, le soutien émotionnel, la discipline positive et le développement de l'enfant.",
    startLearning: "Commencer à apprendre", exploreAcademy: "Explorer l'Académie",
    availableIn: "Disponible en", englishFrench: "Anglais · Français", designedFor: "Conçu pour", mobileLowData: "Mobile et web",
    whatHelp: "En quoi Parent+ peut-il aider ?",
    heroBrief: "La plateforme se concentre sur des solutions d'éducation positive pour les familles camerounaises.",
    learn: "Apprendre", learnDesc: "Cours parentaux courts et activités de micro-apprentissage.",
    getSupport: "Obtenir du soutien", getSupportDesc: "Conseils pratiques pour les situations parentales courantes.",
    trackProgress: "Suivre les progrès", trackProgressDesc: "Voir les leçons terminées et la progression de l'apprentissage.",
    engage: "S'engager", engageDesc: "Ressources communautaires et retours pour l'amélioration.",
    builtFor: "Conçu pour les réalités camerounaises",
    builtForDesc: "Responsive, mobile-first et conçu pour permettre d'ajouter plus tard des canaux à faible connectivité.",
    createMyProfile: "Créer mon profil",
    academyTitle: "Apprenez des compétences parentales pratiques",
    academyMuted: "Choisissez un module court et réalisez une mini-activité.",
    percentCompleted: "% terminé", reviewLesson: "Revoir la leçon", startLesson: "Commencer la leçon",
    whyMatters: "Pourquoi c'est important",
    threeThings: "3 choses à essayer",
    lessonTip: "Astuce Parent+ :",
    quickCheck: "Vérification rapide",
    quizCorrect: "Correct. L'éducation positive associe connexion, guidance et limites respectueuses.",
    quizWrong: "Essayez encore : cherchez la réponse qui combine empathie et guidance calme.",
    back: "Retour", markComplete: "Marquer comme terminé", completed: "Terminé ✓",
    getStarted: "Commencer",
    signupTitle: "Rejoignez Parent+ Cameroun",
    signupMuted: "Créez un compte pour enregistrer votre progression et accéder à toutes les leçons.",
    fullName: "Nom complet", namePlaceholder: "ex. Marie",
    childAgeLine: "Groupe d'âge de l'enfant", years: "ans",
    email: "Adresse e-mail", password: "Mot de passe",
    showPassword: "Afficher le mot de passe", hidePassword: "Masquer le mot de passe",
    acceptTermsA: "J'accepte les ", termsWord: "Conditions", acceptTermsB: " et la ", privacyWord: "Politique de confidentialité",
    createAccount: "Créer le compte", alreadyAccount: "Déjà un compte ?", loginLink: "Se connecter",
    loginTitle: "Connectez-vous à votre compte",
    loginBtnLabel: "Se connecter", forgotPassword: "Mot de passe oublié ?",
    noAccount: "Pas encore de compte ?", signupLink: "Inscrivez-vous",
    emailAlreadyUsed: "Cet e-mail a déjà un compte. Veuillez vous connecter.",
    invalidCredentials: "E-mail ou mot de passe incorrect.",
    acceptRequired: "Veuillez accepter les conditions et la politique de confidentialité.",
    passwordShort: "Le mot de passe doit contenir au moins 6 caractères.",
    accountCreated: "Compte créé. Bienvenue !",
    loggedIn: "Vous êtes connecté(e).",
    termsTitle: "Conditions et confidentialité",
    termsBody: "Parent+ Cameroun collecte uniquement les informations nécessaires pour offrir un soutien parental. Vos données restent sur cet appareil. Nous ne partageons pas d'informations personnelles avec des tiers.",
    forgotTitle: "Réinitialiser votre mot de passe",
    forgotMuted: "Saisissez l'e-mail lié à votre compte. Dans une version en ligne, nous vous enverrions un lien de réinitialisation par e-mail.",
    resetSent: "Si cet e-mail existe, un lien de réinitialisation y serait envoyé.",
    sendLink: "Envoyer le lien",
    privacyAlert: "🔒 Nous ne demandons que les informations nécessaires au service. Vos données sont stockées sur cet appareil.",
    dashboardEyebrow: "Tableau de bord parent", welcome: "Bienvenue,",
    languageLabel: "Langue", myProfile: "Mon profil",
    learningProgress: "Progression de l'apprentissage", lessonsCompleted: "Leçons terminées", modulesInPrototype: "Modules d'apprentissage",
    continueLearning: "Continuer à apprendre", allComplete: "Vous avez terminé toutes les leçons disponibles !",
    continue: "Continuer",
    allDone: "🎉 Excellent ! Vous avez terminé toutes les leçons disponibles. De nouveaux contenus sont ajoutés régulièrement.",
    dashTipTitle: "Astuce parentale du jour",
    dashTipText: "Avant de corriger un comportement, demandez-vous : « De quoi mon enfant a-t-il besoin en ce moment ? »",
    moreSupport: "Obtenir plus de soutien",
    supportTitle: "Conseils pour les situations courantes",
    supportMuted: "Des conseils pratiques et fondés sur des données probantes pour les situations parentales courantes.",
    viewGuidance: "Voir les conseils",
    needFeedback: "Besoin de partager votre avis ?", feedbackHelps: "Votre avis aide à améliorer le contenu et l'expérience des familles.",
    giveFeedback: "Donner votre avis",
    communityTitle: "Apprenons ensemble",
    communityMuted: "Campagnes éducatives, ressources et engagement communautaire modéré.",
    shareFeedback: "Partager votre avis",
    c1title: "Défi de communication positive de 7 jours", c1text: "Essayez une habitude d'écoute active chaque jour et réfléchissez à ce qui a changé.", c1pill: "Campagne",
    c2author: "Ressource éducative", c2title: "Aider les enfants à apprendre à la maison", c2text: "Des routines simples qui soutiennent l'apprentissage sans transformer la maison en salle de classe.", c2pill: "Ressource",
    c3author: "Partenaire communautaire", c3title: "Session de discussion entre parents", c3text: "Espace pour les annonces des partenaires communautaires de confiance.", c3pill: "Événement",
    feedbackEyebrow: "Votre avis", feedbackTitle: "Parlez-nous de votre expérience",
    howSatisfied: "Quel est votre niveau de satisfaction ?", choose: "Choisir", verySatisfied: "Très satisfait", satisfied: "Satisfait", neutral: "Neutre", notSatisfied: "Pas satisfait",
    whatUseful: "Qu'est-ce qui a été utile ?", feedbackPlaceholder: "Votre avis...", submitFeedback: "Envoyer votre avis",
    feedbackThanks: "Merci pour votre avis !",
    profileProgress: "des modules d'apprentissage terminés.", logout: "Se déconnecter",
    toastProfileFirst: "Créez d'abord un compte pour enregistrer votre progression.",
    toastLessonDone: "Leçon terminée !", toastWelcome: "Bienvenue sur Parent+ !",
    toastLoggedOut: "Vous avez été déconnecté(e).",
    guidanceEyebrow: "Conseils", backToSupport: "Retour au soutien",
    langChanged: "Français sélectionné.",
    langLabel: "Français",
    myChildren: "Mes enfants", addChild: "Ajouter un enfant", addChildTitle: "Ajouter un enfant",
    editChild: "Modifier", deleteChild: "Supprimer", saveChild: "Enregistrer", cancel: "Annuler",
    childName: "Nom de l'enfant", childAge: "Âge de l'enfant", childAgeGroup: "Tranche d'âge",
    selectChild: "Sélectionner", childSelected: "Sélectionné",
    progressLabel: "Progression", completedLessonsLabel: "Leçons terminées",
    deleteChildConfirm: "Êtes-vous sûr de vouloir supprimer cet enfant ?",
    forWhichChild: "Pour quel enfant ?", noChildren: "Ajoutez un enfant pour recevoir des recommandations personnalisées.",
    addFirstChild: "Ajoutez votre premier enfant",
    recommendedFor: "Recommandé pour vous", recommendedForChild: "Recommandé pour",
    filterAge: "Âge", filterNeed: "Besoin",
    needCommunication: "Communication", needEmotions: "Émotions", needDiscipline: "Discipline",
    needSchool: "École", needAutonomy: "Autonomie",
    notifications: "Notifications", markAllRead: "Tout marquer comme lu",
    notifNewLesson: "Nouvelle leçon", notifTip: "Conseil du jour", notifProgress: "Progression", notifReminder: "Rappel",
    notifNewLessonMsg: "Nouvelle leçon disponible : Communication positive",
    notifTipMsg: "Découvrez votre conseil parental du jour.",
    notifProgressMsg: "Vous avez terminé 3 leçons cette semaine.",
    notifReminderMsg: "Continuez votre parcours d'apprentissage.",
    myRewards: "Mes récompenses", points: "points",
    badgeFirstStep: "Premier pas", badgeFirstStepDesc: "Première leçon terminée",
    badge7Days: "7 jours", badge7DaysDesc: "7 jours d'apprentissage consécutifs",
    badgeLearningParent: "Parent apprenant", badgeLearningParentDesc: "10 leçons terminées",
    badgePositiveComm: "Communication positive", badgePositiveCommDesc: "Module Communication terminé",
    badgeLocked: "Verrouillé",
    yourJourney: "Votre parcours", streak: "Série", days: "jours",
    learningTime: "Temps d'apprentissage", todayTitle: "Aujourd'hui",
    continuePath: "Continuer votre parcours avec",
    whatsHappening: "Que se passe-t-il aujourd'hui ?",
    situationTantrums: "Mon enfant fait des crises",
    situationScreens: "Il passe trop de temps sur les écrans",
    situationHomework: "Il a des difficultés avec les devoirs",
    situationBedtime: "Le coucher est difficile",
    situationArguments: "Nous nous disputons souvent",
    situationRelationship: "Je veux améliorer notre relation",
    whatYouCanTry: "Ce que vous pouvez essayer",
    campaigns: "Campagnes", resources: "Ressources", events: "Événements",
    feedbackConfirmation: "Merci pour votre retour !",
    feedbackConfirmMsg: "Votre avis nous aide à améliorer Parent+ Cameroun.",
    backToHome: "Retour à l'accueil",
    settings: "Paramètres",
    account: "Compte", personalInfo: "Informations personnelles", changePassword: "Modifier le mot de passe",
    preferences: "Préférences", langSetting: "Langue", appearance: "Apparence",
    notifSetting: "Notifications",
    privacySetting: "Confidentialité", termsSetting: "Conditions d'utilisation",
    currentPassword: "Mot de passe actuel", newPassword: "Nouveau mot de passe", confirmPassword: "Confirmer le mot de passe",
    passwordChanged: "Mot de passe modifié avec succès.",
    profileUpdated: "Profil mis à jour.",
    passwordMismatch: "Les mots de passe ne correspondent pas.",
    passwordRequired: "Le mot de passe actuel est requis.",
    darkMode: "Mode sombre", lightMode: "Mode clair",
    notifReminders: "Rappels d'apprentissage", notifWeekly: "Résumé hebdomadaire",
    privacyInfo: "Vos données sont stockées localement sur cet appareil. Nous ne partageons pas d'informations personnelles avec des tiers.",
    termsInfo: "Parent+ Cameroun est une plateforme prototype. Le contenu est à but éducatif. En utilisant cette plateforme, vous acceptez d'utiliser les conseils de manière responsable.",
    offlineLessons: "Leçons hors connexion", offlineLessonsDesc: "Leçons disponibles sans internet",
    downloadOffline: "Télécharger pour hors connexion", removeOffline: "Supprimer hors connexion",
    listenLesson: "Écouter la leçon", stopListening: "Arrêter l'écoute",
    savedLessons: "Leçons enregistrées", profileInfo: "Informations du profil",
    noOfflineLessons: "Aucune leçon hors connexion enregistrée.",
    noNotifications: "Aucune notification pour le moment.",
    onboardingEyebrow: "Question rapide",
    onboardingTitle: "Que souhaitez-vous améliorer avec votre enfant ?",
    onboardingMuted: "Choisissez tout ce qui compte pour vous en ce moment. Cela nous aide à adapter les leçons et le soutien à votre famille.",
    onboardingOptionCommunication: "Communication",
    onboardingOptionCommunicationDesc: "Parler, écouter et mieux se comprendre.",
    onboardingOptionEducation: "Éducation et apprentissage",
    onboardingOptionEducationDesc: "Devoirs, réussite scolaire et curiosité.",
    onboardingOptionDiscipline: "Discipline positive",
    onboardingOptionDisciplineDesc: "Fixer des limites calmes, cohérentes et respectueuses.",
    onboardingOptionEmotions: "Connexion émotionnelle",
    onboardingOptionEmotionsDesc: "Lien affectif, empathie et gestion des grandes émotions.",
    onboardingOptionBehavior: "Gestion des crises et conflits",
    onboardingOptionBehaviorDesc: "Gérer calmement les moments difficiles.",
    onboardingOptionConfidence: "Confiance et estime de soi",
    onboardingOptionConfidenceDesc: "Aider votre enfant à se sentir capable et en sécurité.",
    onboardingOptionScreenTime: "Écrans et habitudes",
    onboardingOptionScreenTimeDesc: "Routines saines autour des écrans et de la vie quotidienne.",
    onboardingOptionHealth: "Santé et bien-être",
    onboardingOptionHealthDesc: "Nutrition, sommeil et soins au quotidien.",
    onboardingOptionOther: "Autre chose",
    onboardingOtherPlaceholder: "Dites-nous ce que vous aimeriez améliorer...",
    onboardingSubmit: "Envoyer",
    onboardingSkip: "Passer pour l'instant",
    onboardingSelectRequired: "Veuillez choisir au moins une option ou décrire ce que vous aimeriez améliorer.",
    onboardingThanksTitle: "Merci !",
    onboardingThanksMsg: "Nous allons vous aider dans votre relation avec votre enfant.",
    onboardingToast: "Merci ! Nous allons vous aider dans votre relation avec votre enfant."
  }
};

const lessons = [
  {
    id: 1, icon: "💚", duration: "5 min", cat: { en: "Emotional support", fr: "Soutien émotionnel" }, level: { en: "Beginner", fr: "Débutant" }, title: { en: "Understanding Your Child's Emotions", fr: "Comprendre les émotions de votre enfant" }, need: "emotions", ageGroups: ["0-2","3-6","7-12","13+"],
    why: { en: "Emotions are messages. When you understand what your child is feeling, you can respond with empathy instead of reacting to behaviour alone.", fr: "Les émotions sont des messages. Quand vous comprenez ce que ressent votre enfant, vous pouvez répondre avec empathie au lieu de réagir au seul comportement." },
    points: [{ en: "Pause and notice the emotion behind the behaviour.", fr: "Faites une pause et repérez l'émotion derrière le comportement." }, { en: "Name the feeling: \"You seem frustrated.\"", fr: "Nommez le sentiment : « Tu as l'air frustré. »" }, { en: "Stay calm and respond with warmth, even when you set a limit.", fr: "Restez calme et répondez avec chaleur, même en fixant une limite." }],
    tip: { en: "At the end of the day, ask your child to name one feeling they had today.", fr: "En fin de journée, demandez à votre enfant de nommer un sentiment vécu aujourd'hui." },
    quizzes: [
      { q: { en: "A child is crying after losing a game. What is the best first response?", fr: "Un enfant pleure après avoir perdu un jeu. Quelle est la meilleure première réponse ?" }, options: [{ en: "Tell them to stop crying.", fr: "Lui dire d'arrêter de pleurer." }, { en: "Say \"You seem disappointed. I'm here with you.\"", fr: "Dire « Tu as l'air déçu. Je suis avec toi. »" }, { en: "Immediately offer another game.", fr: "Proposer aussitôt un autre jeu." }], correct: 1 },
      { q: { en: "What does naming a feeling do?", fr: "À quoi sert de nommer un sentiment ?" }, options: [{ en: "It helps the child feel understood and calms the brain.", fr: "Cela aide l'enfant à se sentir compris et apaise le cerveau." }, { en: "It makes the child more upset.", fr: "Cela énerve davantage l'enfant." }, { en: "It is only useful for older children.", fr: "Ce n'est utile que pour les enfants plus âgés." }], correct: 0 },
      { q: { en: "Your child is angry at a sibling. What should you avoid?", fr: "Votre enfant est fâché contre un frère ou une sœur. Que faut-il éviter ?" }, options: [{ en: "Listening calmly to both sides.", fr: "Écouter calmement les deux côtés." }, { en: "Punishing the anger itself.", fr: "Punir la colère elle-même." }, { en: "Helping them find words for the feeling.", fr: "Aider à trouver des mots pour le sentiment." }], correct: 1 }
    ]
  },
  {
    id: 2, icon: "💬", duration: "6 min", cat: { en: "Communication", fr: "Communication" }, level: { en: "Beginner", fr: "Débutant" }, title: { en: "Positive Communication at Home", fr: "Communication positive à la maison" }, need: "communication", ageGroups: ["3-6","7-12","13+"],
    why: { en: "The words we use at home teach children how to talk about problems. Warm, clear communication builds trust.", fr: "Les mots que nous utilisons à la maison apprennent aux enfants à parler des problèmes. Une communication chaleureuse et claire construit la confiance." },
    points: [{ en: "Use \"I\" messages: \"I feel worried when…\"", fr: "Utilisez des messages « je » : « Je me sens inquiet quand… »" }, { en: "Give one instruction at a time.", fr: "Donnez une seule consigne à la fois." }, { en: "Praise effort, not just results.", fr: "Félicitez l'effort, pas seulement les résultats." }],
    tip: { en: "Have a short daily check-in: \"What was good about today?\"", fr: "Faites un petit point quotidien : « Qu'est-ce qui a été bien aujourd'hui ? »" },
    quizzes: [
      { q: { en: "Which message is most positive?", fr: "Quel message est le plus positif ?" }, options: [{ en: "\"You never listen!\"", fr: "« Tu n'écoutes jamais ! »" }, { en: "\"I feel frustrated when I have to repeat myself.\"", fr: "« Je me sens frustré quand je dois me répéter. »" }, { en: "\"Stop being difficult.\"", fr: "« Arrête de faire des difficultés. »" }], correct: 1 },
      { q: { en: "When giving an instruction, it helps to:", fr: "Quand on donne une consigne, il est utile de :" }, options: [{ en: "Give several instructions quickly.", fr: "Donner plusieurs consignes rapidement." }, { en: "Give one clear instruction at a time.", fr: "Donner une consigne claire à la fois." }, { en: "Raise your voice for emphasis.", fr: "Élever la voix pour insister." }], correct: 1 },
      { q: { en: "Praising effort means:", fr: "Féliciter l'effort signifie :" }, options: [{ en: "Only praising when the child wins.", fr: "Ne féliciter que lorsque l'enfant gagne." }, { en: "Acknowledging the work your child put in.", fr: "Reconnaître le travail fourni par l'enfant." }, { en: "Ignoring mistakes completely.", fr: "Ignorer complètement les erreurs." }], correct: 1 }
    ]
  },
  {
    id: 3, icon: "🤝", duration: "7 min", cat: { en: "Positive discipline", fr: "Discipline positive" }, level: { en: "Beginner", fr: "Débutant" }, title: { en: "Discipline Without Violence", fr: "La discipline sans violence" }, need: "discipline", ageGroups: ["3-6","7-12","13+"],
    why: { en: "Children learn best when they feel safe. Firm, respectful limits teach self-control without fear.", fr: "Les enfants apprennent mieux quand ils se sentent en sécurité. Des limites fermes et respectueuses enseignent la maîtrise de soi sans peur." },
    points: [{ en: "Set clear limits before a situation happens.", fr: "Fixez des limites claires avant qu'une situation ne se produise." }, { en: "Explain the reason behind the rule.", fr: "Expliquez la raison derrière la règle." }, { en: "Follow through calmly and consistently.", fr: "Faites respecter calmement et de façon constante." }],
    tip: { en: "Use natural consequences: if food is thrown, the meal ends.", fr: "Utilisez des conséquences naturelles : si la nourriture est jetée, le repas se termine." },
    quizzes: [
      { q: { en: "What is the goal of positive discipline?", fr: "Quel est l'objectif de la discipline positive ?" }, options: [{ en: "To teach self-control and responsibility.", fr: "Enseigner la maîtrise de soi et la responsabilité." }, { en: "To make children fear their parents.", fr: "Faire craindre leurs parents aux enfants." }, { en: "To punish every mistake.", fr: "Punir chaque erreur." }], correct: 0 },
      { q: { en: "When a rule is broken, a good response is:", fr: "Quand une règle est enfreinte, une bonne réponse est :" }, options: [{ en: "Slapping and shouting.", fr: "Frapper et crier." }, { en: "Staying calm and applying a logical consequence.", fr: "Rester calme et appliquer une conséquence logique." }, { en: "Ignoring it completely.", fr: "L'ignorer complètement." }], correct: 1 },
      { q: { en: "Explaining the reason behind a rule:", fr: "Expliquer la raison derrière une règle :" }, options: [{ en: "Is a waste of time with young children.", fr: "Est une perte de temps avec les jeunes enfants." }, { en: "Helps children understand and follow it.", fr: "Aide les enfants à comprendre et à la respecter." }, { en: "Makes children respect you less.", fr: "Fait moins respecter les parents." }], correct: 1 }
    ]
  },
  {
    id: 4, icon: "🧩", duration: "6 min", cat: { en: "Conflict management", fr: "Gestion des conflits" }, level: { en: "Intermediate", fr: "Intermédiaire" }, title: { en: "Managing Parent-Child Conflict", fr: "Gérer les conflits parent-enfant" }, need: "discipline", ageGroups: ["7-12","13+"],
    why: { en: "Conflict is normal in every family. What matters is how we repair and reconnect afterwards.", fr: "Le conflit est normal dans chaque famille. Ce qui compte, c'est comment on répare et on se reconnecte ensuite." },
    points: [{ en: "Take a break before speaking when emotions are high.", fr: "Faites une pause avant de parler quand les émotions sont vives." }, { en: "Listen to your child's side without interrupting.", fr: "Écoutez la version de votre enfant sans l'interrompre." }, { en: "Repair the relationship: apologise, reconnect, move on.", fr: "Réparez la relation : excusez-vous, reconnectez-vous, avancez." }],
    tip: { en: "After a conflict, share one thing you could do differently next time.", fr: "Après un conflit, partagez une chose que vous pourriez faire différemment la prochaine fois." },
    quizzes: [
      { q: { en: "When a conflict becomes heated, the best step is:", fr: "Quand un conflit s'envenime, la meilleure étape est :" }, options: [{ en: "Keep arguing until someone wins.", fr: "Continuer à se disputer jusqu'à ce que quelqu'un gagne." }, { en: "Take a short calm-down break.", fr: "Faire une courte pause pour se calmer." }, { en: "End the conversation permanently.", fr: "Mettre fin définitivement à la conversation." }], correct: 1 },
      { q: { en: "After a conflict, what helps most?", fr: "Après un conflit, qu'est-ce qui aide le plus ?" }, options: [{ en: "Acting as if nothing happened.", fr: "Faire comme si rien ne s'était passé." }, { en: "Repairing the relationship and reconnecting.", fr: "Réparer la relation et se reconnecter." }, { en: "Bringing the conflict up in every argument.", fr: "Ressortir le conflit à chaque dispute." }], correct: 1 },
      { q: { en: "Listening without interrupting:", fr: "Écouter sans interrompre :" }, options: [{ en: "Shows your child they matter.", fr: "Montre à votre enfant qu'il compte." }, { en: "Gives the child too much power.", fr: "Donne trop de pouvoir à l'enfant." }, { en: "Should only happen with adults.", fr: "Ne devrait se faire qu'avec les adultes." }], correct: 0 }
    ]
  },
  {
    id: 5, icon: "📚", duration: "5 min", cat: { en: "Learning support", fr: "Soutien à l'apprentissage" }, level: { en: "Beginner", fr: "Débutant" }, title: { en: "Supporting Learning at Home", fr: "Soutenir l'apprentissage à la maison" }, need: "school", ageGroups: ["3-6","7-12","13+"],
    why: { en: "Learning happens in everyday moments, not only in school. Small habits at home build strong foundations.", fr: "L'apprentissage se produit dans les moments de tous les jours, pas seulement à l'école. De petites habitudes à la maison bâtissent de solides fondations." },
    points: [{ en: "Create a quiet time and place for reading or homework.", fr: "Créez un moment et un endroit calmes pour la lecture ou les devoirs." }, { en: "Ask open questions: \"What did you learn today?\"", fr: "Posez des questions ouvertes : « Qu'as-tu appris aujourd'hui ? »" }, { en: "Connect learning to real life: counting, cooking, stories.", fr: "Reliez l'apprentissage à la vie réelle : compter, cuisiner, les histoires." }],
    tip: { en: "Let your child see you reading or learning too.", fr: "Laissez votre enfant vous voir lire ou apprendre aussi." },
    quizzes: [
      { q: { en: "A good homework habit is:", fr: "Une bonne habitude de devoirs est :" }, options: [{ en: "Doing homework anywhere with distractions.", fr: "Faire les devoirs n'importe où avec des distractions." }, { en: "A quiet, predictable time and place.", fr: "Un moment et un endroit calmes et prévisibles." }, { en: "Only studying right before a test.", fr: "N'étudier que juste avant un examen." }], correct: 1 },
      { q: { en: "Which question encourages learning?", fr: "Quelle question encourage l'apprentissage ?" }, options: [{ en: "\"Did you behave today?\"", fr: "« T'es-tu bien comporté aujourd'hui ? »" }, { en: "\"What did you learn today?\"", fr: "« Qu'as-tu appris aujourd'hui ? »" }, { en: "\"Did you get good marks?\"", fr: "« As-tu eu de bonnes notes ? »" }], correct: 1 },
      { q: { en: "Learning at home is best when:", fr: "L'apprentissage à la maison est meilleur quand :" }, options: [{ en: "It only happens at a desk.", fr: "Il ne se fait qu'à un bureau." }, { en: "It connects to everyday life.", fr: "Il est relié à la vie quotidienne." }, { en: "It is always formal and serious.", fr: "Il est toujours formel et sérieux." }], correct: 1 }
    ]
  },
  {
    id: 6, icon: "🏠", duration: "5 min", cat: { en: "Safe home", fr: "Foyer sûr" }, level: { en: "Beginner", fr: "Débutant" }, title: { en: "Creating a Safe Home Environment", fr: "Créer un environnement domestique sûr" }, need: "autonomy", ageGroups: ["0-2","3-6","7-12"],
    why: { en: "A safe home protects children from harm and helps them feel secure. Safety and warmth go together.", fr: "Un foyer sûr protège les enfants du danger et les aide à se sentir en sécurité. La sécurité et la chaleur vont de pair." },
    points: [{ en: "Store medicines and dangerous items out of reach.", fr: "Rangez les médicaments et les objets dangereux hors de portée." }, { en: "Keep routines consistent so children feel stable.", fr: "Gardez des routines régulières pour que les enfants se sentent stables." }, { en: "Make sure children know who to ask for help.", fr: "Assurez-vous que les enfants savent à qui demander de l'aide." }],
    tip: { en: "Do a monthly safety check of your home.", fr: "Faites une vérification de sécurité mensuelle de votre maison." },
    quizzes: [
      { q: { en: "Where should medicines be stored?", fr: "Où faut-il ranger les médicaments ?" }, options: [{ en: "On a low, open shelf.", fr: "Sur une étagère basse et ouverte." }, { en: "Out of children's reach, locked if possible.", fr: "Hors de portée des enfants, verrouillés si possible." }, { en: "In the kitchen drawer.", fr: "Dans le tiroir de la cuisine." }], correct: 1 },
      { q: { en: "A secure home is one where children:", fr: "Un foyer sûr est un endroit où les enfants :" }, options: [{ en: "Feel safe to express themselves.", fr: "Se sentent en sécurité pour s'exprimer." }, { en: "Are never allowed to move.", fr: "N'ont jamais le droit de bouger." }, { en: "Avoid their parents when upset.", fr: "Évitent leurs parents quand ils sont contrariés." }], correct: 0 },
      { q: { en: "Routines help children feel safe because they:", fr: "Les routines aident les enfants à se sentir en sécurité parce qu'elles :" }, options: [{ en: "Are strict and inflexible.", fr: "Sont strictes et inflexibles." }, { en: "Make the day predictable.", fr: "Rendent la journée prévisible." }, { en: "Remove all choices.", fr: "Suppriment tous les choix." }], correct: 1 }
    ]
  },
  {
    id: 7, icon: "🤗", duration: "6 min", cat: { en: "Relationships", fr: "Relations" }, level: { en: "Beginner", fr: "Débutant" }, title: { en: "Building Trust and Secure Attachment", fr: "Construire la confiance et un lien sûr" }, need: "emotions", ageGroups: ["0-2","3-6","7-12"],
    why: { en: "Trust grows through small, repeated moments of care. A child who feels secure explores the world more confidently.", fr: "La confiance grandit à travers de petits moments de soin répétés. Un enfant qui se sent en sécurité explore le monde avec plus d'assurance." },
    points: [{ en: "Respond consistently when your child needs you.", fr: "Répondez de façon constante quand votre enfant a besoin de vous." }, { en: "Spend quality time without screens, even 10 minutes.", fr: "Passez du temps de qualité sans écrans, même 10 minutes." }, { en: "Keep promises, big and small.", fr: "Tenez vos promesses, grandes et petites." }],
    tip: { en: "Greet your child warmly when they return home.", fr: "Accueillez chaleureusement votre enfant à son retour à la maison." },
    quizzes: [
      { q: { en: "Trust is built mainly through:", fr: "La confiance se construit principalement par :" }, options: [{ en: "Expensive gifts.", fr: "Des cadeaux coûteux." }, { en: "Repeated, caring responses.", fr: "Des réponses bienveillantes répétées." }, { en: "Punishing mistakes.", fr: "La punition des erreurs." }], correct: 1 },
      { q: { en: "A child who feels securely attached will:", fr: "Un enfant qui se sent en sécurité dans son lien :" }, options: [{ en: "Explore with more confidence.", fr: "Explore avec plus d'assurance." }, { en: "Never ask for help.", fr: "Ne demande jamais d'aide." }, { en: "Avoid all adults.", fr: "Évite tous les adultes." }], correct: 0 },
      { q: { en: "If you promise your child something:", fr: "Si vous promettez quelque chose à votre enfant :" }, options: [{ en: "You can break it if you are tired.", fr: "Vous pouvez rompre si vous êtes fatigué." }, { en: "Try to keep it to build trust.", fr: "Essayez de tenir pour construire la confiance." }, { en: "It has no effect on trust.", fr: "Cela n'a aucun effet sur la confiance." }], correct: 1 }
    ]
  },
  {
    id: 8, icon: "🌟", duration: "5 min", cat: { en: "Communication", fr: "Communication" }, level: { en: "Beginner", fr: "Débutant" }, title: { en: "The Power of Praise and Encouragement", fr: "Le pouvoir des félicitations et des encouragements" }, need: "communication", ageGroups: ["0-2","3-6","7-12","13+"],
    why: { en: "Encouragement shows children what they did well and motivates them to keep trying.", fr: "L'encouragement montre aux enfants ce qu'ils ont bien fait et les motive à continuer d'essayer." },
    points: [{ en: "Praise specific efforts: \"You kept trying!\"", fr: "Félicitez les efforts précis : « Tu as continué d'essayer ! »" }, { en: "Praise behaviour you want to see more of.", fr: "Félicitez le comportement que vous voulez voir se répéter." }, { en: "Use encouragement even after mistakes.", fr: "Utilisez l'encouragement même après les erreurs." }],
    tip: { en: "Notice one good thing your child did today and say it out loud.", fr: "Remarquez une bonne chose faite aujourd'hui par votre enfant et dites-la à voix haute." },
    quizzes: [
      { q: { en: "Which praise is most specific?", fr: "Quel compliment est le plus précis ?" }, options: [{ en: "\"You are the best.\"", fr: "« Tu es le meilleur. »" }, { en: "\"You worked hard and kept trying.\"", fr: "« Tu as travaillé dur et tu as continué d'essayer. »" }, { en: "\"Finally, you did it right.\"", fr: "« Enfin, tu l'as fait correctement. »" }], correct: 1 },
      { q: { en: "Praise is most effective when it:", fr: "Le compliment est le plus efficace quand il :" }, options: [{ en: "Focuses on the effort or behaviour.", fr: "Se concentre sur l'effort ou le comportement." }, { en: "Compares the child to others.", fr: "Compare l'enfant aux autres." }, { en: "Is used only for perfect results.", fr: "N'est utilisé que pour des résultats parfaits." }], correct: 0 },
      { q: { en: "After a child makes a mistake, you should:", fr: "Après qu'un enfant a fait une erreur, vous devriez :" }, options: [{ en: "Only point out the mistake.", fr: "Seulement signaler l'erreur." }, { en: "Encourage the effort and show next steps.", fr: "Encourager l'effort et montrer les étapes suivantes." }, { en: "Avoid the child for a while.", fr: "Éviter l'enfant pendant un moment." }], correct: 1 }
    ]
  },
  {
    id: 9, icon: "👂", duration: "5 min", cat: { en: "Emotional support", fr: "Soutien émotionnel" }, level: { en: "Beginner", fr: "Débutant" }, title: { en: "Listening to Your Child's Feelings", fr: "Écouter les sentiments de votre enfant" }, need: "communication", ageGroups: ["3-6","7-12","13+"],
    why: { en: "Being truly heard is one of the greatest gifts a parent can give. Listening builds emotional safety.", fr: "Être vraiment écouté est l'un des plus grands cadeaux qu'un parent puisse offrir. L'écoute construit la sécurité émotionnelle." },
    points: [{ en: "Stop what you are doing and look at your child.", fr: "Arrêtez ce que vous faites et regardez votre enfant." }, { en: "Listen without fixing or judging right away.", fr: "Écoutez sans corriger ou juger immédiatement." }, { en: "Reflect back what you heard: \"So you felt left out?\"", fr: "Renvoyez ce que vous avez entendu : « Alors tu t'es senti exclu ? »" }],
    tip: { en: "Let your child finish before you respond.", fr: "Laissez votre enfant finir avant de répondre." },
    quizzes: [
      { q: { en: "When your child wants to talk, first:", fr: "Quand votre enfant veut parler, d'abord :" }, options: [{ en: "Keep doing your task and nod.", fr: "Continuer votre tâche et hocher la tête." }, { en: "Stop and give them your attention.", fr: "Vous arrêter et lui donner votre attention." }, { en: "Tell them to be quick.", fr: "Lui dire de se dépêcher." }], correct: 1 },
      { q: { en: "Reflecting back what your child said:", fr: "Renvoyer ce que votre enfant a dit :" }, options: [{ en: "Confirms you understood.", fr: "Confirme que vous avez compris." }, { en: "Makes the child repeat themselves.", fr: "Oblige l'enfant à se répéter." }, { en: "Is a form of criticism.", fr: "Est une forme de critique." }], correct: 0 },
      { q: { en: "Active listening means:", fr: "L'écoute active signifie :" }, options: [{ en: "Waiting for your turn to speak.", fr: "Attendre votre tour de parler." }, { en: "Understanding the feelings behind the words.", fr: "Comprendre les sentiments derrière les mots." }, { en: "Agreeing with everything.", fr: "Être d'accord avec tout." }], correct: 1 }
    ]
  },
  {
    id: 10, icon: "🧭", duration: "6 min", cat: { en: "Positive discipline", fr: "Discipline positive" }, level: { en: "Beginner", fr: "Débutant" }, title: { en: "Setting Limits with Kindness", fr: "Fixer des limites avec bienveillance" }, need: "discipline", ageGroups: ["3-6","7-12","13+"],
    why: { en: "Limits help children feel safe. Kind limits teach self-discipline without shame.", fr: "Les limites aident les enfants à se sentir en sécurité. Des limites bienveillantes enseignent l'autodiscipline sans honte." },
    points: [{ en: "State the limit simply: \"We hold hands at the road.\"", fr: "Énoncez la limite simplement : « On se tient la main sur la route. »" }, { en: "Offer a choice within the limit when possible.", fr: "Offrez un choix dans la limite quand c'est possible." }, { en: "Stay calm when the child tests the limit.", fr: "Restez calme quand l'enfant teste la limite." }],
    tip: { en: "Repeat limits calmly without shouting.", fr: "Répétez les limites calmement sans crier." },
    quizzes: [
      { q: { en: "A kind limit sounds like:", fr: "Une limite bienveillante ressemble à :" }, options: [{ en: "\"Because I said so!\"", fr: "« Parce que je l'ai dit ! »" }, { en: "\"We hold hands at the road to stay safe.\"", fr: "« On se tient la main sur la route pour rester en sécurité. »" }, { en: "\"If you don't listen, no dinner.\"", fr: "« Si tu n'écoutes pas, pas de dîner. »" }], correct: 1 },
      { q: { en: "When a child tests a limit, a good response is:", fr: "Quand un enfant teste une limite, une bonne réponse est :" }, options: [{ en: "Losing patience and shouting.", fr: "Perdre patience et crier." }, { en: "Staying calm and consistent.", fr: "Rester calme et constant." }, { en: "Giving up on the rule.", fr: "Abandonner la règle." }], correct: 1 },
      { q: { en: "Offering choices within a limit:", fr: "Offrir des choix dans une limite :" }, options: [{ en: "Confuses children completely.", fr: "Embrouille complètement les enfants." }, { en: "Gives children some control.", fr: "Donne un peu de contrôle aux enfants." }, { en: "Is the same as no rules.", fr: "Revient à ne pas avoir de règles." }], correct: 1 }
    ]
  },
  {
    id: 11, icon: "😠", duration: "6 min", cat: { en: "Emotional support", fr: "Soutien émotionnel" }, level: { en: "Beginner", fr: "Débutant" }, title: { en: "Helping Your Child Handle Anger", fr: "Aider votre enfant à gérer la colère" }, need: "emotions", ageGroups: ["3-6","7-12","13+"],
    why: { en: "Anger is a normal feeling. Children need help expressing it safely, not hiding it.", fr: "La colère est un sentiment normal. Les enfants ont besoin d'aide pour l'exprimer en toute sécurité, pas pour la cacher." },
    points: [{ en: "Teach calming tools: slow breaths, quiet space.", fr: "Enseignez des outils pour se calmer : respirations lentes, espace tranquille." }, { en: "Help your child name what made them angry.", fr: "Aidez votre enfant à nommer ce qui l'a mis en colère." }, { en: "Show calm yourself; your calm is contagious.", fr: "Montrez le calme vous-même ; votre calme est contagieux." }],
    tip: { en: "Practice \"blow the candle\" breathing together.", fr: "Pratiquez ensemble la respiration « souffle la bougie »." },
    quizzes: [
      { q: { en: "Anger in children is:", fr: "La colère chez l'enfant est :" }, options: [{ en: "Always bad and must be punished.", fr: "Toujours mauvaise et doit être punie." }, { en: "A normal feeling that needs guidance.", fr: "Un sentiment normal qui a besoin d'être guidé." }, { en: "A sign the child is spoiled.", fr: "Un signe que l'enfant est gâté." }], correct: 1 },
      { q: { en: "A good calming tool is:", fr: "Un bon outil pour se calmer est :" }, options: [{ en: "Slow, deep breathing.", fr: "Une respiration lente et profonde." }, { en: "Screaming louder.", fr: "Crier plus fort." }, { en: "Holding the feeling inside.", fr: "Garder le sentiment à l'intérieur." }], correct: 0 },
      { q: { en: "When your child is angry, your calm attitude:", fr: "Quand votre enfant est en colère, votre attitude calme :" }, options: [{ en: "Has no effect.", fr: "N'a aucun effet." }, { en: "Helps them calm down too.", fr: "L'aide aussi à se calmer." }, { en: "Always makes them angrier.", fr: "Le rend toujours plus en colère." }], correct: 1 }
    ]
  },
  {
    id: 12, icon: "👫", duration: "6 min", cat: { en: "Social development", fr: "Développement social" }, level: { en: "Beginner", fr: "Débutant" }, title: { en: "Supporting Friendships and Social Skills", fr: "Soutenir les amitiés et les compétences sociales" }, need: "communication", ageGroups: ["3-6","7-12","13+"],
    why: { en: "Friendships teach children sharing, empathy and cooperation. Parents help by modelling kindness.", fr: "Les amitiés apprennent aux enfants le partage, l'empathie et la coopération. Les parents aident en montrant l'exemple de la gentillesse." },
    points: [{ en: "Model greetings, thank-you and please at home.", fr: "Montrez l'exemple des salutations, merci et s'il vous plaît à la maison." }, { en: "Coach sharing by taking turns.", fr: "Guidez le partage en jouant à tour de rôle." }, { en: "Talk about feelings in social situations.", fr: "Parlez des sentiments dans les situations sociales." }],
    tip: { en: "Invite a friend over and observe how your child plays.", fr: "Invitez un ami et observez comment votre enfant joue." },
    quizzes: [
      { q: { en: "Children learn social skills mainly by:", fr: "Les enfants apprennent les compétences sociales surtout en :" }, options: [{ en: "Watching and practising with others.", fr: "Observant et pratiquant avec les autres." }, { en: "Listening to long lectures.", fr: "Écoutant de longs discours." }, { en: "Being left alone.", fr: "Étant laissés seuls." }], correct: 0 },
      { q: { en: "If two children fight over a toy, you can:", fr: "Si deux enfants se disputent un jouet, vous pouvez :" }, options: [{ en: "Take the toy away for good.", fr: "Retirer le jouet pour toujours." }, { en: "Help them take turns.", fr: "Les aider à jouer à tour de rôle." }, { en: "Shout at both.", fr: "Crier sur les deux." }], correct: 1 },
      { q: { en: "Modelling \"please\" and \"thank you\" at home:", fr: "Montrer l'exemple du « s'il vous plaît » et du « merci » à la maison :" }, options: [{ en: "Teaches children respect.", fr: "Apprend le respect aux enfants." }, { en: "Is only for adults.", fr: "Ne concerne que les adultes." }, { en: "Has no effect on children.", fr: "N'a aucun effet sur les enfants." }], correct: 0 }
    ]
  },
  {
    id: 13, icon: "❓", duration: "5 min", cat: { en: "Learning support", fr: "Soutien à l'apprentissage" }, level: { en: "Beginner", fr: "Débutant" }, title: { en: "Encouraging Curiosity and Questions", fr: "Encourager la curiosité et les questions" }, need: "school", ageGroups: ["3-6","7-12","13+"],
    why: { en: "Curiosity drives learning. When we welcome questions, children stay eager to discover.", fr: "La curiosité est le moteur de l'apprentissage. Quand nous accueillons les questions, les enfants restent avides de découvrir." },
    points: [{ en: "Answer questions simply and honestly.", fr: "Répondez aux questions simplement et honnêtement." }, { en: "Explore together: \"Let's find out.\"", fr: "Explorez ensemble : « Allons découvrir. »" }, { en: "Praise good questions, not just good answers.", fr: "Félicitez les bonnes questions, pas seulement les bonnes réponses." }],
    tip: { en: "Keep a small box of interesting objects to explore together.", fr: "Gardez une petite boîte d'objets intéressants à explorer ensemble." },
    quizzes: [
      { q: { en: "When your child asks many questions:", fr: "Quand votre enfant pose beaucoup de questions :" }, options: [{ en: "It means they are annoying.", fr: "Cela signifie qu'il est agaçant." }, { en: "It shows healthy curiosity.", fr: "Cela montre une saine curiosité." }, { en: "You should stop them.", fr: "Vous devriez l'arrêter." }], correct: 1 },
      { q: { en: "A good answer to \"why\" questions is:", fr: "Une bonne réponse aux questions « pourquoi » est :" }, options: [{ en: "Simple, honest and age-appropriate.", fr: "Simple, honnête et adaptée à l'âge." }, { en: "\"Because I said so.\"", fr: "« Parce que je l'ai dit. »" }, { en: "Long and complicated.", fr: "Longue et compliquée." }], correct: 0 },
      { q: { en: "Exploring \"Let's find out\" together:", fr: "Explorer « Allons découvrir » ensemble :" }, options: [{ en: "Builds your child's love of learning.", fr: "Construit l'amour de l'apprentissage chez votre enfant." }, { en: "Makes learning too hard.", fr: "Rend l'apprentissage trop difficile." }, { en: "Should be done only at school.", fr: "Ne devrait se faire qu'à l'école." }], correct: 0 }
    ]
  },
  {
    id: 14, icon: "🧘", duration: "5 min", cat: { en: "Self-care", fr: "Prendre soin de soi" }, level: { en: "Intermediate", fr: "Intermédiaire" }, title: { en: "Managing Your Own Stress as a Parent", fr: "Gérer votre propre stress de parent" }, need: "emotions", ageGroups: ["3-6","7-12","13+"],
    why: { en: "Your stress affects the whole family. Caring for yourself is part of caring for your children.", fr: "Votre stress affecte toute la famille. Prendre soin de vous fait partie de prendre soin de vos enfants." },
    points: [{ en: "Take short breaks to breathe and reset.", fr: "Prenez de courtes pauses pour respirer et repartir du bon pied." }, { en: "Ask for help from family and friends.", fr: "Demandez de l'aide à la famille et aux amis." }, { en: "Be kind to yourself; parenting is hard work.", fr: "Soyez bienveillant envers vous-même ; la parentalité est un travail difficile." }],
    tip: { en: "Every day, find 5 quiet minutes just for yourself.", fr: "Chaque jour, trouvez 5 minutes de calme rien que pour vous." },
    quizzes: [
      { q: { en: "A stressed parent can better support a child by:", fr: "Un parent stressé peut mieux soutenir son enfant en :" }, options: [{ en: "Ignoring their own stress.", fr: "Ignorant son propre stress." }, { en: "Managing their stress with breaks and support.", fr: "Gérant son stress avec des pauses et du soutien." }, { en: "Taking stress out on the child.", fr: "Défoulant son stress sur l'enfant." }], correct: 1 },
      { q: { en: "Asking family or friends for help:", fr: "Demander de l'aide à la famille ou aux amis :" }, options: [{ en: "Is a sign of weakness.", fr: "Est un signe de faiblesse." }, { en: "Is a healthy way to cope.", fr: "Est une façon saine de faire face." }, { en: "Should never be done.", fr: "Ne devrait jamais se faire." }], correct: 1 },
      { q: { en: "Taking 5 quiet minutes each day:", fr: "Prendre 5 minutes de calme chaque jour :" }, options: [{ en: "Is selfish.", fr: "Est égoïste." }, { en: "Helps you be more patient.", fr: "Vous aide à être plus patient." }, { en: "Wastes valuable time.", fr: "Fait perdre un temps précieux." }], correct: 1 }
    ]
  },
  {
    id: 15, icon: "⏰", duration: "6 min", cat: { en: "Home", fr: "Foyer" }, level: { en: "Beginner", fr: "Débutant" }, title: { en: "Family Routines and Predictable Schedules", fr: "Routines familiales et emplois du temps prévisibles" }, need: "autonomy", ageGroups: ["0-2","3-6","7-12"],
    why: { en: "Routines reduce stress and arguments. Predictable schedules help children feel secure.", fr: "Les routines réduisent le stress et les disputes. Des emplois du temps prévisibles aident les enfants à se sentir en sécurité." },
    points: [{ en: "Set regular times for meals, sleep and play.", fr: "Fixez des heures régulières pour les repas, le sommeil et le jeu." }, { en: "Use a simple picture chart for young children.", fr: "Utilisez un simple tableau illustré pour les jeunes enfants." }, { en: "Be flexible when the routine truly cannot happen.", fr: "Soyez flexible quand la routine ne peut vraiment pas avoir lieu." }],
    tip: { en: "Start with one routine and build from there.", fr: "Commencez par une routine et construisez à partir de là." },
    quizzes: [
      { q: { en: "Routines help children feel:", fr: "Les routines aident les enfants à se sentir :" }, options: [{ en: "Bored and unhappy.", fr: "Ennuyés et malheureux." }, { en: "Secure and calm.", fr: "En sécurité et calmes." }, { en: "Confused about time.", fr: "Confus à propos du temps." }], correct: 1 },
      { q: { en: "A picture chart of the day is useful for:", fr: "Un tableau illustré de la journée est utile pour :" }, options: [{ en: "Young children who can't read.", fr: "Les jeunes enfants qui ne savent pas lire." }, { en: "Only adults.", fr: "Seulement les adultes." }, { en: "Making children work harder.", fr: "Faire travailler davantage les enfants." }], correct: 0 },
      { q: { en: "When a routine is missed, you should:", fr: "Quand une routine est manquée, vous devriez :" }, options: [{ en: "Panic and punish.", fr: "Paniquer et punir." }, { en: "Return to it calmly the next day.", fr: "Y revenir calmement le lendemain." }, { en: "Abandon routines forever.", fr: "Abandonner les routines pour toujours." }], correct: 1 }
    ]
  },
  {
    id: 16, icon: "🗨️", duration: "7 min", cat: { en: "Communication", fr: "Communication" }, level: { en: "Intermediate", fr: "Intermédiaire" }, title: { en: "Talking About Difficult Topics", fr: "Parler des sujets difficiles" }, need: "communication", ageGroups: ["7-12","13+"],
    why: { en: "Avoiding hard topics leaves children confused. Honest, simple talks build trust and safety.", fr: "Éviter les sujets difficiles laisse les enfants confus. Des conversations honnêtes et simples construisent la confiance et la sécurité." },
    points: [{ en: "Start with simple, age-appropriate words.", fr: "Commencez par des mots simples et adaptés à l'âge." }, { en: "Let the child lead with their questions.", fr: "Laissez l'enfant mener avec ses questions." }, { en: "Reassure the child they are safe and loved.", fr: "Rassurez l'enfant : il est en sécurité et aimé." }],
    tip: { en: "Talk in the car or during a walk, where eye contact feels easier.", fr: "Parlez en voiture ou pendant une promenade, où le regard est plus facile." },
    quizzes: [
      { q: { en: "When talking about a difficult topic, start with:", fr: "Quand on parle d'un sujet difficile, commencez par :" }, options: [{ en: "Simple, age-appropriate words.", fr: "Des mots simples et adaptés à l'âge." }, { en: "Frightening details.", fr: "Des détails effrayants." }, { en: "Silence and avoidance.", fr: "Le silence et l'évitement." }], correct: 0 },
      { q: { en: "If your child asks a hard question:", fr: "Si votre enfant pose une question difficile :" }, options: [{ en: "Ignore it and change the subject.", fr: "L'ignorer et changer de sujet." }, { en: "Answer honestly at their level.", fr: "Répondre honnêtement à son niveau." }, { en: "Punish the question.", fr: "Punir la question." }], correct: 1 },
      { q: { en: "After a difficult conversation, reassure your child that:", fr: "Après une conversation difficile, rassurez votre enfant que :" }, options: [{ en: "They are safe and loved.", fr: "Il est en sécurité et aimé." }, { en: "They shouldn't ask again.", fr: "Il ne devrait plus poser de questions." }, { en: "It was their fault.", fr: "C'était de sa faute." }], correct: 0 }
    ]
  },
  {
    id: 17, icon: "🎒", duration: "6 min", cat: { en: "Learning support", fr: "Soutien à l'apprentissage" }, level: { en: "Beginner", fr: "Débutant" }, title: { en: "Supporting School Transitions", fr: "Soutenir les transitions scolaires" }, need: "school", ageGroups: ["3-6","7-12","13+"],
    why: { en: "Starting school or changing classes is exciting and stressful. Your support makes the change easier.", fr: "Commencer l'école ou changer de classe est à la fois excitant et stressant. Votre soutien facilite le changement." },
    points: [{ en: "Talk positively about the new school.", fr: "Parlez positivement de la nouvelle école." }, { en: "Keep morning routines calm and early.", fr: "Gardez des routines matinales calmes et matinales." }, { en: "Stay in touch with teachers.", fr: "Restez en contact avec les enseignants." }],
    tip: { en: "Revisit the school building before term starts if possible.", fr: "Revisitez le bâtiment de l'école avant le début de la rentrée si possible." },
    quizzes: [
      { q: { en: "Before starting school, it helps to:", fr: "Avant de commencer l'école, il est utile de :" }, options: [{ en: "Talk positively about the change.", fr: "Parler positivement du changement." }, { en: "Warn the child it will be terrible.", fr: "Prévenir l'enfant que ce sera terrible." }, { en: "Avoid the topic completely.", fr: "Éviter complètement le sujet." }], correct: 0 },
      { q: { en: "A calm morning routine:", fr: "Une routine matinale calme :" }, options: [{ en: "Makes school mornings easier.", fr: "Rend les matins d'école plus faciles." }, { en: "Has no effect.", fr: "N'a aucun effet." }, { en: "Takes too much time.", fr: "Prend trop de temps." }], correct: 0 },
      { q: { en: "Contacting your child's teacher helps you:", fr: "Contacter l'enseignant de votre enfant vous aide à :" }, options: [{ en: "Understand progress and challenges.", fr: "Comprendre les progrès et les difficultés." }, { en: "Control the whole class.", fr: "Contrôler toute la classe." }, { en: "Avoid all meetings.", fr: "Éviter toutes les réunions." }], correct: 0 }
    ]
  },
  {
    id: 18, icon: "💪", duration: "6 min", cat: { en: "Emotional support", fr: "Soutien émotionnel" }, level: { en: "Beginner", fr: "Débutant" }, title: { en: "Building Healthy Self-Esteem", fr: "Construire une estime de soi saine" }, need: "emotions", ageGroups: ["3-6","7-12","13+"],
    why: { en: "Healthy self-esteem helps children try new things and recover from setbacks.", fr: "Une estime de soi saine aide les enfants à essayer de nouvelles choses et à se relever des échecs." },
    points: [{ en: "Give honest, specific praise.", fr: "Donnez des compliments honnêtes et précis." }, { en: "Let children try age-appropriate tasks alone.", fr: "Laissez les enfants essayer seuls des tâches adaptées à leur âge." }, { en: "Separate the mistake from the child.", fr: "Séparez l'erreur de l'enfant." }],
    tip: { en: "Say \"You made a mistake, and I still believe in you.\"", fr: "Dites « Tu as fait une erreur, et je crois toujours en toi. »" },
    quizzes: [
      { q: { en: "Healthy self-esteem grows when children:", fr: "Une estime de soi saine grandit quand les enfants :" }, options: [{ en: "Never face challenges.", fr: "Ne font jamais face à des défis." }, { en: "Feel capable and supported.", fr: "Se sentent capables et soutenus." }, { en: "Are compared to others.", fr: "Sont comparés aux autres." }], correct: 1 },
      { q: { en: "When a child fails a task, say:", fr: "Quand un enfant échoue à une tâche, dites :" }, options: [{ en: "\"I told you so.\"", fr: "« Je te l'avais dit. »" }, { en: "\"You made a mistake, and I still believe in you.\"", fr: "« Tu as fait une erreur, et je crois toujours en toi. »" }, { en: "\"Look at your brother.\"", fr: "« Regarde ton frère. »" }], correct: 1 },
      { q: { en: "Letting children try tasks on their own:", fr: "Laisser les enfants essayer des tâches seuls :" }, options: [{ en: "Builds confidence.", fr: "Construit la confiance." }, { en: "Makes them depend on you.", fr: "Les rend dépendants de vous." }, { en: "Is too risky, always.", fr: "Est toujours trop risqué." }], correct: 0 }
    ]
  },
  {
    id: 19, icon: "🛠️", duration: "6 min", cat: { en: "Conflict management", fr: "Gestion des conflits" }, level: { en: "Intermediate", fr: "Intermédiaire" }, title: { en: "Problem-Solving Together", fr: "Résoudre les problèmes ensemble" }, need: "discipline", ageGroups: ["7-12","13+"],
    why: { en: "Solving problems together teaches children to think, negotiate and take responsibility.", fr: "Résoudre les problèmes ensemble apprend aux enfants à réfléchir, négocier et assumer des responsabilités." },
    points: [{ en: "Define the problem together, calmly.", fr: "Définissez le problème ensemble, calmement." }, { en: "Brainstorm solutions without judging.", fr: "Proposez des solutions sans juger." }, { en: "Choose one solution and try it.", fr: "Choisissez une solution et essayez-la." }],
    tip: { en: "Use the question: \"What could we try differently?\"", fr: "Utilisez la question : « Que pourrions-nous essayer différemment ? »" },
    quizzes: [
      { q: { en: "When solving a problem together, first:", fr: "Quand on résout un problème ensemble, d'abord :" }, options: [{ en: "Blame someone.", fr: "Blâmer quelqu'un." }, { en: "Define the problem calmly together.", fr: "Définir le problème calmement ensemble." }, { en: "Decide alone without listening.", fr: "Décider seul sans écouter." }], correct: 1 },
      { q: { en: "Brainstorming solutions means:", fr: "Proposer des solutions signifie :" }, options: [{ en: "Judging each idea immediately.", fr: "Juger chaque idée immédiatement." }, { en: "Gathering ideas without judgement first.", fr: "Réunir des idées sans juger d'abord." }, { en: "Only considering your own ideas.", fr: "Ne considérer que vos propres idées." }], correct: 1 },
      { q: { en: "Asking \"What could we try differently?\"", fr: "Demander « Que pourrions-nous essayer différemment ? » :" }, options: [{ en: "Encourages the child to think.", fr: "Encourage l'enfant à réfléchir." }, { en: "Shows you don't know.", fr: "Montre que vous ne savez pas." }, { en: "Gives the child all the power.", fr: "Donne tout le pouvoir à l'enfant." }], correct: 0 }
    ]
  },
  {
    id: 20, icon: "🎉", duration: "5 min", cat: { en: "Relationships", fr: "Relations" }, level: { en: "Beginner", fr: "Débutant" }, title: { en: "Celebrating Small Wins as a Family", fr: "Célébrer les petites victoires en famille" }, need: "emotions", ageGroups: ["0-2","3-6","7-12","13+"],
    why: { en: "Celebrating small wins builds connection and shows children that effort matters.", fr: "Célébrer les petites victoires renforce les liens et montre aux enfants que l'effort compte." },
    points: [{ en: "Celebrate effort, not only big results.", fr: "Célébrez l'effort, pas seulement les grands résultats." }, { en: "Share one \"win of the day\" at dinner.", fr: "Partagez une « victoire du jour » au dîner." }, { en: "Make celebration simple: a hug, a kind word.", fr: "Faites une célébration simple : un câlin, un mot gentil." }],
    tip: { en: "Start a family jar where small wins are written down.", fr: "Commencez un bocal familial où l'on écrit les petites victoires." },
    quizzes: [
      { q: { en: "Small wins worth celebrating include:", fr: "Les petites victoires à célébrer comprennent :" }, options: [{ en: "Effort and small progress.", fr: "L'effort et les petits progrès." }, { en: "Only winning competitions.", fr: "Seulement les victoires en compétition." }, { en: "Only perfect results.", fr: "Seulement les résultats parfaits." }], correct: 0 },
      { q: { en: "A simple celebration could be:", fr: "Une célébration simple pourrait être :" }, options: [{ en: "A hug and a kind word.", fr: "Un câlin et un mot gentil." }, { en: "Expensive gifts.", fr: "Des cadeaux coûteux." }, { en: "Ignoring the effort.", fr: "Ignorer l'effort." }], correct: 0 },
      { q: { en: "Celebrating together as a family:", fr: "Célébrer ensemble en famille :" }, options: [{ en: "Strengthens connection.", fr: "Renforce les liens." }, { en: "Makes children lazy.", fr: "Rend les enfants paresseux." }, { en: "Only matters for adults.", fr: "Ne compte que pour les adultes." }], correct: 0 }
    ]
  }
];

const supportTopics = [
  { id: 1, icon: "😤", title: { en: "My child is having a tantrum", fr: "Mon enfant fait une crise" }, short: { en: "Pause, ensure safety, acknowledge feelings and give a simple choice.", fr: "Faites une pause, assurez la sécurité, reconnaissez les sentiments et offrez un choix simple." }, detail: { en: "Stay close but calm. Lower yourself to your child's eye level and name the feeling: \"You are very upset right now.\" Wait until the storm passes before discussing. Once calmer, offer a simple choice or redirect to an activity.", fr: "Restez proche mais calme. Mettez-vous à la hauteur de l'enfant et nommez le sentiment : « Tu es très contrarié en ce moment. » Attendez que la tempête passe avant de discuter. Une fois calmé, offrez un choix simple ou redirigez vers une activité." } },
  { id: 2, icon: "📱", title: { en: "Too much screen time", fr: "Trop de temps d'écran" }, short: { en: "Agree on predictable routines and offer an alternative activity.", fr: "Fixez des routines prévisibles et proposez une activité alternative." }, detail: { en: "Set clear screen times together, such as after homework or meals. Put phones away during family moments. When it is time to stop, give a warning and suggest an appealing alternative like playing outside or reading together.", fr: "Fixez ensemble des moments d'écran clairs, par exemple après les devoirs ou les repas. Rangez les téléphones pendant les moments en famille. À l'arrêt, prévenez et proposez une alternative attrayante comme jouer dehors ou lire ensemble." } },
  { id: 3, icon: "🎒", title: { en: "My child struggles with homework", fr: "Mon enfant a du mal avec les devoirs" }, short: { en: "Break the task into small steps and praise effort, not only results.", fr: "Divisez la tâche en petites étapes et félicitez l'effort, pas seulement les résultats." }, detail: { en: "Create a quiet spot and a regular time. Divide homework into short, manageable parts and take small breaks. Stay near to help, but let the child do the work. Praise effort and progress, not only correct answers.", fr: "Créez un endroit calme et un moment régulier. Divisez les devoirs en petites parties gérables avec de courtes pauses. Restez à proximité pour aider, mais laissez l'enfant faire le travail. Félicitez l'effort et les progrès, pas seulement les bonnes réponses." } },
  { id: 4, icon: "🗣️", title: { en: "We argue a lot", fr: "Nous nous disputons souvent" }, short: { en: "Choose a calm moment to talk and use specific, respectful language.", fr: "Choisissez un moment calme pour discuter et utilisez un langage précis et respectueux." }, detail: { en: "Avoid arguing when emotions are high; take a pause first. Later, talk about one specific issue instead of many. Use \"I\" messages and listen to your child's view. End with a small agreement you both can follow.", fr: "Évitez de discuter quand les émotions sont vives ; faites d'abord une pause. Ensuite, parlez d'un problème précis plutôt que de plusieurs. Utilisez des messages « je » et écoutez le point de vue de l'enfant. Terminez par un petit accord que vous pouvez tous deux suivre." } },
  { id: 5, icon: "🌙", title: { en: "Bedtime is difficult", fr: "Le coucher est difficile" }, short: { en: "Create a consistent wind-down routine and reduce stimulating activities before sleep.", fr: "Créez une routine d'apaisement régulière et réduisez les activités stimulantes avant le sommeil." }, detail: { en: "Start the routine at the same time every night: bath, story, then lights down. Reduce screens and exciting games an hour before bed. Keep the room calm and dark. Be patient for a few nights until the routine becomes automatic.", fr: "Commencez la routine à la même heure chaque soir : bain, histoire, puis extinction des lumières. Réduisez les écrans et les jeux excitants une heure avant le coucher. Gardez la chambre calme et sombre. Soyez patient quelques nuits jusqu'à ce que la routine devienne automatique." } },
  { id: 6, icon: "❤️", title: { en: "My child seems withdrawn", fr: "Mon enfant semble renfermé" }, short: { en: "Listen without pressure and consider reaching out to a trusted professional when concerns persist.", fr: "Écoutez sans pression et envisagez de contacter un professionnel de confiance si les inquiétudes persistent." }, detail: { en: "Give your child time and space, and let them know you are available. Talk during shared activities, which often feels less pressured. If withdrawal lasts, affects school or sleep, or is accompanied by other signs, contact a trusted health or counselling professional.", fr: "Donnez du temps et de l'espace à votre enfant et faites-lui savoir que vous êtes disponible. Parlez pendant des activités partagées, ce qui est souvent moins pesant. Si le retrait dure, affecte l'école ou le sommeil, ou s'accompagne d'autres signes, contactez un professionnel de santé ou de conseil de confiance." } },
  { id: 7, icon: "🍽️", title: { en: "My child doesn't want to eat", fr: "Mon enfant ne veut pas manger" }, short: { en: "Offer regular meals, keep portions small and stay relaxed about eating.", fr: "Servez des repas réguliers, gardez de petites portions et restez détendu au sujet de l'alimentation." }, detail: { en: "Serve meals at consistent times and let your child serve themselves small portions. Avoid force or bribes; stay calm and neutral. Offer the same family food, and reintroduce rejected foods calmly over time. If weight or growth is a concern, see a health professional.", fr: "Servez les repas à heures régulières et laissez l'enfant se servir de petites portions. Évitez la force ou les récompenses ; restez calme et neutre. Proposez la même nourriture de la famille et réintroduisez calmement les aliments refusés au fil du temps. En cas d'inquiétude sur le poids ou la croissance, consultez un professionnel de santé." } },
  { id: 8, icon: "🛡️", title: { en: "My child is being bullied at school", fr: "Mon enfant est victime de harcèlement à l'école" }, short: { en: "Listen without blame, document what happened and involve the school.", fr: "Écoutez sans blâmer, notez ce qui s'est passé et impliquez l'école." }, detail: { en: "Take the report seriously and thank your child for telling you. Record facts: who, what, where, when. Talk to the school or teacher and agree on a plan. Reassure your child it is not their fault and keep monitoring the situation.", fr: "Prenez le récit au sérieux et remerciez votre enfant de vous en avoir parlé. Notez les faits : qui, quoi, où, quand. Parlez à l'école ou à l'enseignant et convenez d'un plan. Rassurez votre enfant : ce n'est pas de sa faute. Continuez à surveiller la situation." } },
  { id: 9, icon: "🕵️", title: { en: "My child lies to me", fr: "Mon enfant me ment" }, short: { en: "Stay calm, find the reason behind the lie and focus on honesty.", fr: "Restez calme, trouvez la raison derrière le mensonge et mettez l'accent sur l'honnêteté." }, detail: { en: "Children often lie to avoid punishment or to protect themselves. Stay calm and ask what happened without a trap. Focus on the truth and the problem, not on calling the child a liar. Praise honesty when they tell the truth.", fr: "Les enfants mentent souvent pour éviter une punition ou pour se protéger. Restez calme et demandez ce qui s'est passé sans piège. Concentrez-vous sur la vérité et le problème, pas sur le fait de traiter l'enfant de menteur. Félicitez l'honnêteté quand il dit la vérité." } },
  { id: 10, icon: "😶", title: { en: "My child is too shy", fr: "Mon enfant est trop timide" }, short: { en: "Respect their pace, model social warmth and practise small steps.", fr: "Respectez son rythme, montrez de la chaleur sociale et pratiquez de petites étapes." }, detail: { en: "Never label the child as \"shy\" in front of others. Prepare them before social situations and start with small groups. Model greetings and friendly talk yourself. Celebrate small social steps without pushing too fast.", fr: "Ne qualifiez jamais l'enfant de « timide » devant les autres. Préparez-le avant les situations sociales et commencez par de petits groupes. Montrez vous-même l'exemple des salutations et des conversations amicales. Célébrez les petites étapes sociales sans pousser trop vite." } },
  { id: 11, icon: "👊", title: { en: "My child hits others", fr: "Mon enfant frappe les autres" }, short: { en: "Stop the action calmly, name the feeling and teach better options.", fr: "Arrêtez le geste calmement, nommez le sentiment et enseignez de meilleures options." }, detail: { en: "Intervene quickly and calmly: stop the hand and say \"We don't hit.\" Name the feeling behind it and help find words. Practise what to do instead, like asking for help or taking a break. Use consequences that teach, not shame.", fr: "Intervenez vite et calmement : arrêtez la main et dites « On ne frappe pas ». Nommez le sentiment derrière le geste et aidez à trouver les mots. Pratiquez ce qu'il faut faire à la place, comme demander de l'aide ou faire une pause. Utilisez des conséquences qui enseignent, sans humilier." } },
  { id: 12, icon: "🌃", title: { en: "My child is afraid of the dark", fr: "Mon enfant a peur du noir" }, short: { en: "Take the fear seriously, keep a calm routine and add a small comfort.", fr: "Prenez la peur au sérieux, gardez une routine calme et ajoutez un petit réconfort." }, detail: { en: "Don't dismiss the fear. Keep a gentle bedtime routine and a small night light. Check the room together before bed to show it is safe. Stay reassuring and consistent; most fears fade with time.", fr: "Ne minimisez pas la peur. Gardez une routine douce au coucher et une petite veilleuse. Vérifiez la chambre ensemble avant le sommeil pour montrer qu'elle est sûre. Restez rassurant et constant ; la plupart des peurs s'estompent avec le temps." } },
  { id: 13, icon: "🤼", title: { en: "My child fights with siblings", fr: "Mon enfant se dispute avec ses frères et sœurs" }, short: { en: "Stay neutral, set the rule \"no hurting\" and coach problem-solving.", fr: "Restez neutre, imposez la règle « pas de blessure » et guidez la résolution de problèmes." }, detail: { en: "Don't take sides; listen to both. Enforce the rule that hurting others is never allowed. Coach them to solve the problem together or take turns. Catch and praise moments when they get along.", fr: "Ne prenez pas parti ; écoutez les deux. Faites respecter la règle selon laquelle blesser les autres n'est jamais permis. Guidez-les pour résoudre le problème ensemble ou jouer à tour de rôle. Saisissez et félicitez les moments où ils s'entendent bien." } },
  { id: 14, icon: "⏳", title: { en: "My child wants everything now", fr: "Mon enfant veut tout tout de suite" }, short: { en: "Acknowledge the wish, set a clear limit and practise waiting.", fr: "Reconnaissez le désir, fixez une limite claire et entraînez-vous à attendre." }, detail: { en: "Validate the desire (\"I understand you want it\") then state the limit calmly. Explain what can happen: later, on a special occasion, or instead. Practise short waits in daily life and praise patience.", fr: "Validez le désir (« Je comprends que tu le veux ») puis énoncez la limite calmement. Expliquez ce qui peut se passer : plus tard, pour une occasion spéciale, ou à la place. Entraînez-vous à de courtes attentes dans la vie quotidienne et félicitez la patience." } },
  { id: 15, icon: "👨‍👩‍👧", title: { en: "My child is struggling after separation or divorce", fr: "Mon enfant traverse une période difficile après une séparation ou un divorce" }, short: { en: "Keep children out of conflicts, reassure them and keep routines.", fr: "Tenez les enfants à l'écart des conflits, rassurez-les et gardez les routines." }, detail: { en: "Never criticise the other parent in front of the child. Reassure the child that both parents still love them and that the separation is not their fault. Keep routines and a predictable schedule. Watch for signs of distress and seek support if needed.", fr: "Ne critiquez jamais l'autre parent devant l'enfant. Rassurez l'enfant : les deux parents l'aiment toujours et la séparation n'est pas de sa faute. Maintenez les routines et un emploi du temps prévisible. Surveillez les signes de détresse et cherchez du soutien si besoin." } },
  { id: 16, icon: "💥", title: { en: "My child talks back to me", fr: "Mon enfant me répond avec insolence" }, short: { en: "Stay calm, set a respectful expectation and model calm words.", fr: "Restez calme, énoncez une attente respectueuse et montrez l'exemple de paroles calmes." }, detail: { en: "Don't match the tone. Wait for calm, then state the expectation: \"We speak respectfully in our home.\" Model the tone you want to hear. Repair afterwards and keep the relationship strong.", fr: "Ne répondez pas sur le même ton. Attendez le calme, puis énoncez l'attente : « Dans notre maison, on parle avec respect. » Montrez le ton que vous souhaitez entendre. Réparez ensuite et gardez une relation solide." } },
  { id: 17, icon: "⚡", title: { en: "My child won't sit still", fr: "Mon enfant n'arrive pas à rester assis" }, short: { en: "Offer movement breaks, reduce sugar before tasks and keep expectations realistic.", fr: "Offrez des pauses de mouvement, réduisez le sucre avant les tâches et gardez des attentes réalistes." }, detail: { en: "Some children need to move to concentrate. Allow short movement breaks between tasks. Keep instructions short and tasks brief. If restlessness is extreme or affects school and sleep, talk to a health professional.", fr: "Certains enfants ont besoin de bouger pour se concentrer. Accordez de courtes pauses de mouvement entre les tâches. Gardez les consignes courtes et les tâches brèves. Si l'agitation est extrême ou affecte l'école et le sommeil, parlez-en à un professionnel de santé." } },
  { id: 18, icon: "⚖️", title: { en: "My child compares themselves to others", fr: "Mon enfant se compare aux autres" }, short: { en: "Avoid comparisons at home and highlight the child's own strengths.", fr: "Évitez les comparaisons à la maison et mettez en avant les forces propres de l'enfant." }, detail: { en: "Stop comparing siblings or other children at home. Point out the child's own progress and unique strengths. Teach that everyone learns at their own pace. Praise effort rather than ranking.", fr: "Arrêtez les comparaisons entre frères et sœurs ou avec d'autres enfants à la maison. Soulignez les progrès et les forces propres de l'enfant. Apprenez que chacun apprend à son rythme. Félicitez l'effort plutôt que le classement." } },
  { id: 19, icon: "💪", title: { en: "I am a single parent and feel overwhelmed", fr: "Je suis parent seul(e) et je me sens dépassé(e)" }, short: { en: "Build a support network, keep routines simple and ask for help.", fr: "Construisez un réseau de soutien, gardez des routines simples et demandez de l'aide." }, detail: { en: "It is okay to ask for help from family, friends or community groups. Keep routines simple and realistic. Set aside small moments for yourself. If you feel overwhelmed for a long time, talk to a trusted professional.", fr: "Il est acceptable de demander de l'aide à la famille, aux amis ou aux groupes communautaires. Gardez des routines simples et réalistes. Réservez de petits moments pour vous. Si vous vous sentez dépassé longtemps, parlez-en à un professionnel de confiance." } },
  { id: 20, icon: "🏫", title: { en: "My child doesn't want to go to school", fr: "Mon enfant ne veut pas aller à l'école" }, short: { en: "Listen to the real worry, keep a calm morning and involve the school.", fr: "Écoutez la vraie inquiétude, gardez un matin calme et impliquez l'école." }, detail: { en: "Ask what is hard about school without pressure. Keep mornings calm and on time. Talk with the teacher about what you notice. Return the child to school gently; staying home can make avoidance stronger.", fr: "Demandez ce qui est difficile à l'école sans pression. Gardez des matins calmes et à l'heure. Parlez avec l'enseignant de ce que vous observez. Remettez l'enfant à l'école en douceur ; rester à la maison peut renforcer l'évitement." } }
];

const parentingTips = [
  { en: "Before correcting a behaviour, ask yourself: “What does my child need right now?”", fr: "Avant de corriger un comportement, demandez-vous : « De quoi mon enfant a-t-il besoin en ce moment ? »" },
  { en: "Praise the effort your child shows, not only the result.", fr: "Félicitez l'effort que votre enfant fournit, pas seulement le résultat." },
  { en: "Five minutes of your full attention can calm a whole evening.", fr: "Cinq minutes de toute votre attention peuvent apaiser toute une soirée." },
  { en: "Name the feeling: “You seem frustrated.” Naming feelings helps children calm down.", fr: "Nommez le sentiment : « Tu as l'air frustré. » Nommer les émotions aide l'enfant à se calmer." },
  { en: "Offer a choice within the limit: “Do you want to walk or be carried?”", fr: "Offrez un choix dans la limite : « Tu veux marcher ou que je te porte ? »" },
  { en: "Keep one consistent bedtime routine; routines help children feel safe.", fr: "Gardez une routine de coucher régulière ; les routines aident les enfants à se sentir en sécurité." },
  { en: "Ask open questions like “What did you learn today?” to encourage curiosity.", fr: "Posez des questions ouvertes comme « Qu'as-tu appris aujourd'hui ? » pour encourager la curiosité." },
  { en: "When you make a mistake, apologise and reconnect. Repair builds trust.", fr: "Quand vous faites une erreur, excusez-vous et reconnectez-vous. La réparation construit la confiance." },
  { en: "Model calm. Your calm is contagious and helps your child regulate.", fr: "Montrez le calme. Votre calme est contagieux et aide votre enfant à se réguler." },
  { en: "Take five quiet minutes for yourself each day; caring for you is caring for them.", fr: "Prenez cinq minutes de calme pour vous chaque jour ; prendre soin de vous, c'est prendre soin d'eux." },
  { en: "Separate the mistake from the child: “You made a mistake, and I still believe in you.”", fr: "Séparez l'erreur de l'enfant : « Tu as fait une erreur, et je crois toujours en toi. »" },
  { en: "Give one clear instruction at a time instead of several at once.", fr: "Donnez une seule consigne claire à la fois plutôt que plusieurs d'un coup." }
];

const communityPosts = {
  campaigns: [
    { icon: "💚", title: { en: "7-Day Positive Communication Challenge", fr: "Défi de communication positive de 7 jours" }, text: { en: "Try one active-listening habit each day and reflect on what changed.", fr: "Essayez une habitude d'écoute active chaque jour et réfléchissez à ce qui a changé." }, pill: { en: "Campaign", fr: "Campagne" } },
    { icon: "🌱", title: { en: "Positive Discipline Week", fr: "Semaine de la discipline positive" }, text: { en: "Join thousands of parents practicing respectful limits for one week.", fr: "Rejoignez des milliers de parents qui pratiquent des limites respectueuses pendant une semaine." }, pill: { en: "Campaign", fr: "Campagne" } },
    { icon: "🤝", title: { en: "Family Connection Challenge", fr: "Défi connexion familiale" }, text: { en: "Spend 10 minutes of screen-free time with your child each day.", fr: "Passer 10 minutes sans écran avec votre enfant chaque jour." }, pill: { en: "Campaign", fr: "Campagne" } }
  ],
  resources: [
    { icon: "📚", title: { en: "Helping Children Learn at Home", fr: "Aider les enfants à apprendre à la maison" }, text: { en: "Simple routines that support learning without turning home into another classroom.", fr: "Des routines simples qui soutiennent l'apprentissage sans transformer la maison en salle de classe." }, pill: { en: "Resource", fr: "Ressource" } },
    { icon: "📖", title: { en: "Parenting Guide: Ages 0-5", fr: "Guide parental : 0-5 ans" }, text: { en: "Practical tips for the early years of parenting.", fr: "Conseils pratiques pour les premières années de parentalité." }, pill: { en: "Resource", fr: "Ressource" } },
    { icon: "🎬", title: { en: "Video: Calm Parenting Techniques", fr: "Vidéo : Techniques de parenting calme" }, text: { en: "Watch short demonstrations of positive discipline strategies.", fr: "Regardez de courtes démonstrations de stratégies de discipline positive." }, pill: { en: "Resource", fr: "Ressource" } }
  ],
  events: [
    { icon: "👥", title: { en: "Parent Discussion Session", fr: "Session de discussion entre parents" }, text: { en: "Space for announcements from trusted community partners.", fr: "Espace pour les annonces des partenaires communautaires de confiance." }, pill: { en: "Event", fr: "Événement" } },
    { icon: "🎓", title: { en: "Online Workshop: Positive Communication", fr: "Atelier en ligne : Communication positive" }, text: { en: "Learn practical communication skills with an expert.", fr: "Apprenez des compétences pratiques de communication avec un expert." }, pill: { en: "Event", fr: "Événement" } },
    { icon: "🗓️", title: { en: "Community Meetup", fr: "Rencontre communautaire" }, text: { en: "Connect with other parents in your area.", fr: "Connectez-vous avec d'autres parents de votre région." }, pill: { en: "Event", fr: "Événement" } }
  ]
};

const situations = [
  { icon: "😡", key: "tantrums", supportId: 1 },
  { icon: "📱", key: "screens", supportId: 2 },
  { icon: "📚", key: "homework", supportId: 3 },
  { icon: "🌙", key: "bedtime", supportId: 5 },
  { icon: "🗣️", key: "arguments", supportId: 4 },
  { icon: "❤️", key: "relationship", supportId: 6 }
];

const onboardingGoals = [
  { id: "communication", icon: "message-circle", titleKey: "onboardingOptionCommunication", descKey: "onboardingOptionCommunicationDesc" },
  { id: "education", icon: "book-open", titleKey: "onboardingOptionEducation", descKey: "onboardingOptionEducationDesc" },
  { id: "discipline", icon: "compass", titleKey: "onboardingOptionDiscipline", descKey: "onboardingOptionDisciplineDesc" },
  { id: "emotions", icon: "heart", titleKey: "onboardingOptionEmotions", descKey: "onboardingOptionEmotionsDesc" },
  { id: "behavior", icon: "wind", titleKey: "onboardingOptionBehavior", descKey: "onboardingOptionBehaviorDesc" },
  { id: "confidence", icon: "star", titleKey: "onboardingOptionConfidence", descKey: "onboardingOptionConfidenceDesc" }
];
const onboardingIconSvgs = {
  "message-circle": '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>',
  "book-open": '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/></svg>',
  "compass": '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/></svg>',
  "heart": '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>',
  "wind": '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/></svg>',
  "star": '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>',
  "pencil": '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>'
};

const state = {
  user: JSON.parse(localStorage.getItem("parentPlusUser") || "null"),
  lang: localStorage.getItem("parentPlusLang") || "en",
  childAge: localStorage.getItem("parentPlusAge") || "3-5",
  theme: localStorage.getItem("parentPlusTheme") || "light",
  children: JSON.parse(localStorage.getItem("parentPlusChildren") || "[]"),
  selectedChildId: localStorage.getItem("parentPlusSelectedChild") || null,
  notifications: JSON.parse(localStorage.getItem("parentPlusNotifications") || "[]"),
  notificationPrefs: JSON.parse(localStorage.getItem("parentPlusNotifPrefs") || '{"reminders":true,"weekly":true}'),
  offlineLessons: JSON.parse(localStorage.getItem("parentPlusOffline") || "[]"),
  communityTab: "campaigns",
  academyNeed: null,
  academyAge: null
};
let lastView = "home";
let prevView = "home";
let curLessonId = null;
let firstRender = true;
let quizWins = {};

function getUsers() { try { return JSON.parse(localStorage.getItem("parentPlusUsers") || "[]"); } catch (e) { return []; } }
function saveUsers(u) { localStorage.setItem("parentPlusUsers", JSON.stringify(u)); }
function save() {
  localStorage.setItem("parentPlusUser", JSON.stringify(state.user));
  localStorage.setItem("parentPlusLang", state.lang);
  localStorage.setItem("parentPlusAge", state.childAge);
  localStorage.setItem("parentPlusTheme", state.theme);
  localStorage.setItem("parentPlusChildren", JSON.stringify(state.children));
  localStorage.setItem("parentPlusSelectedChild", state.selectedChildId || "");
  localStorage.setItem("parentPlusNotifications", JSON.stringify(state.notifications));
  localStorage.setItem("parentPlusNotifPrefs", JSON.stringify(state.notificationPrefs));
  localStorage.setItem("parentPlusOffline", JSON.stringify(state.offlineLessons));
  if (state.user) {
    const users = getUsers();
    const i = users.findIndex(u => u.email === state.user.email);
    if (i >= 0) { users[i].childAge = state.user.childAge; users[i].progress = state.user.progress || []; users[i].password = state.user.password; users[i].name = state.user.name; users[i].children = state.children.map(c=>({name:c.name,age:c.age,progress:c.progress||[]})); users[i].onboardingDone = state.user.onboardingDone || false; users[i].onboardingGoals = state.user.onboardingGoals || []; users[i].onboardingOther = state.user.onboardingOther || ""; saveUsers(users); }
  }
}
function progress() { return state.user ? (state.user.progress || []) : []; }
function t(key) {
  const d = translations[state.lang] || translations.en;
  return d[key] || translations.en[key] || key;
}
function tr(o) { return (o[state.lang] || o.en); }
function showToast(msg) { toast.textContent = msg; toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2500); }
function go(view) { location.hash = view; }
function completed(id) { return progress().includes(id); }
function progressPct() { return Math.round((progress().length / lessons.length) * 100); }
function initials(name) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  const first = parts[0] ? parts[0][0] : "";
  const last = parts.length > 1 ? parts[parts.length - 1].split("-").pop()[0] : "";
  return (first + last).toUpperCase() || "?";
}
function applyTheme() { document.documentElement.dataset.theme = state.theme; }
function applyLang() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const lbl = el.querySelector(".nav-label");
    if (lbl) { lbl.textContent = t(el.dataset.i18n); } else { el.textContent = t(el.dataset.i18n); }
  });
  document.getElementById("langBtn").textContent = state.lang === "en" ? "FR" : "EN";
}
function updateTopBar() {
  const lb = document.getElementById("loginBtn");
  if (!lb) return;
  if (state.user) {
    lb.className = "avatar-btn";
    lb.innerHTML = escapeHtml(initials(state.user.name));
  } else {
    lb.className = "primary small";
    lb.textContent = t("getStarted");
  }
  const nb = document.getElementById("notifBtn");
  if (nb) nb.style.display = state.user ? "" : "none";
  updateNotifBadge();
}
function updateNotifBadge() {
  const badge = document.getElementById("notifBadge");
  if (!badge) return;
  const count = unreadCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}
function back() { go(prevView || "home"); }
function sidebar() {
  const cur = (location.hash.replace("#", "") || "home").split("-")[0];
  const items = [["dashboard", "navDashboard", "gauge"], ["academy", "navAcademy", "library-big"], ["support", "navSupport", "heart-plus"], ["community", "navCommunity", "newspaper"], ["profile", "myProfile", "user-round"]];
  return `
    <nav class="side-nav">
      <a class="side-brand" href="#dashboard">
        <span class="brand-mark"><img src="assets/logo.png" alt="Parent+ Cameroon logo"></span>
        <span><strong>Parent+</strong><small>Cameroon</small></span>
      </a>
      ${items.map(([v, k, ic]) => `<button type="button" data-view="${v}" class="${cur === v ? "active" : ""}"><span class="iconic" data-icon="${ic}"></span>${t(k)}</button>`).join("")}
    </nav>`;
}
function startLesson(id) { if (!state.user) { go("signup"); return; } go("lesson-" + id); }
function startLearning() { go(state.user ? "academy" : "signup"); }
function viewGuidance(id) { if (!state.user) { go("signup"); return; } go("guidance-" + id); }
function openFeedback() { if (!state.user) { go("signup"); return; } go("feedback"); }
function escapeHtml(s) { return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c])); }

// Children helpers
function generateId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
function ageGroupForAge(age) {
  if (age <= 2) return "0-2";
  if (age <= 6) return "3-6";
  if (age <= 12) return "7-12";
  return "13+";
}
function selectedChild() { return state.children.find(c => c.id === state.selectedChildId) || null; }
function childProgress(child) { return child.progress || []; }
function childProgressPct(child) { return Math.round((childProgress(child).length / lessons.length) * 100); }
function addChild(name, age) {
  const id = generateId();
  const child = { id, name, age, ageGroup: ageGroupForAge(age), progress: [] };
  state.children.push(child);
  if (!state.selectedChildId) state.selectedChildId = id;
  save();
  return child;
}
function updateChild(id, name, age) {
  const child = state.children.find(c => c.id === id);
  if (child) { child.name = name; child.age = age; child.ageGroup = ageGroupForAge(age); save(); }
}
function deleteChild(id) {
  state.children = state.children.filter(c => c.id !== id);
  if (state.selectedChildId === id) state.selectedChildId = state.children.length > 0 ? state.children[0].id : null;
  save();
}
function selectChild(id) { state.selectedChildId = id; save(); }
function selectChildFromAcademy(id) { selectChild(id); render(); }
function deleteChildConfirm(id) { if (confirm(t("deleteChildConfirm"))) { deleteChild(id); render(); } }

// Notification helpers
function unreadCount() { return state.notifications.filter(n => !n.read).length; }
function markNotificationRead(id) { const n = state.notifications.find(x => x.id === id); if (n) { n.read = true; save(); } }
function markAllNotificationsRead() { state.notifications.forEach(n => n.read = true); save(); }
function createNotification(type, titleKey, messageKey) {
  state.notifications.unshift({ id: generateId(), type, titleKey, messageKey, read: false, timestamp: Date.now() });
  save();
}
function initNotifications() {
  if (state.user && state.notifications.length === 0) {
    createNotification("lesson", "notifNewLesson", "notifNewLessonMsg");
    createNotification("tip", "notifTip", "notifTipMsg");
    createNotification("progress", "notifProgress", "notifProgressMsg");
    createNotification("reminder", "notifReminder", "notifReminderMsg");
  }
}

// Badge/Rewards helpers
function calculatePoints() { return state.user ? (state.user.progress || []).length * 10 + state.children.length * 5 : 0; }
function getBadges() {
  const prog = state.user ? (state.user.progress || []) : [];
  const commLessons = lessons.filter(l => l.need === "communication");
  const commCompleted = commLessons.length > 0 && commLessons.every(l => prog.includes(l.id));
  return [
    { id: "first_step", icon: "🥇", titleKey: "badgeFirstStep", descKey: "badgeFirstStepDesc", unlocked: prog.length >= 1 },
    { id: "7_days", icon: "🔥", titleKey: "badge7Days", descKey: "badge7DaysDesc", unlocked: prog.length >= 7 },
    { id: "learning_parent", icon: "📚", titleKey: "badgeLearningParent", descKey: "badgeLearningParentDesc", unlocked: prog.length >= 10 },
    { id: "positive_comm", icon: "💚", titleKey: "badgePositiveComm", descKey: "badgePositiveCommDesc", unlocked: commCompleted }
  ];
}

// Lesson filtering
function filteredLessons(child, needFilter, ageFilter) {
  let list = [...lessons];
  if (child && !ageFilter) { list = list.filter(l => l.ageGroups.includes(child.ageGroup)); }
  if (ageFilter) { list = list.filter(l => l.ageGroups.includes(ageFilter)); }
  if (needFilter && needFilter !== "all") { list = list.filter(l => l.need === needFilter); }
  return list;
}
function recommendedLessons() { const c = selectedChild(); return c ? filteredLessons(c, null, null).slice(0, 4) : []; }
function filterAcademyAge(ag) { state.academyAge = state.academyAge === ag ? null : ag; state.academyNeed = null; render(); }
function filterAcademyNeed(n) { state.academyNeed = state.academyNeed === n ? null : n; state.academyAge = null; render(); }

// Offline lessons
function isOfflineSaved(id) { return state.offlineLessons.includes(id); }
function toggleOffline(id) { if (isOfflineSaved(id)) { state.offlineLessons = state.offlineLessons.filter(x => x !== id); } else { state.offlineLessons.push(id); } save(); }
function toggleOfflineLesson(id) { toggleOffline(id); showToast(isOfflineSaved(id) ? t("downloadOffline") : t("removeOffline")); render(); }

// Audio/speech
let speechActive = false;
function speakLesson(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = state.lang === "fr" ? "fr-FR" : "en-US";
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  }
}
function stopSpeech() { if ('speechSynthesis' in window) window.speechSynthesis.cancel(); }
function listenLessonText(btn) {
  if (speechActive) { stopSpeech(); speechActive = false; btn.innerHTML = `<span class="iconic" data-icon="volume"></span> ${t("listenLesson")}`; return; }
  const l = lessons.find(x => x.id === curLessonId);
  if (!l) return;
  speechActive = true;
  btn.innerHTML = `<span class="iconic" data-icon="volume"></span> ${t("stopListening")}`;
  const fullText = tr(l.title) + ". " + tr(l.why) + ". " + l.points.map(p => tr(p)).join(". ") + ". " + tr(l.tip);
  speakLesson(fullText);
  if ('speechSynthesis' in window) { window.speechSynthesis.onend = () => { speechActive = false; btn.innerHTML = `<span class="iconic" data-icon="volume"></span> ${t("listenLesson")}`; }; }
}

// Settings helpers
function toggleLangSetting() { state.lang = state.lang === "en" ? "fr" : "en"; save(); applyLang(); render(); }
function toggleNotifPref(key) { state.notificationPrefs[key] = !state.notificationPrefs[key]; save(); }
function toggleAcademyNeed(n) { state.academyNeed = state.academyNeed === n ? null : n; render(); }

function timeSince(ts) {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return state.lang === "fr" ? "À l'instant" : "Just now";
  if (mins < 60) return mins + (state.lang === "fr" ? " min" : " min");
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return hrs + (state.lang === "fr" ? " h" : " h");
  return Math.floor(hrs / 24) + (state.lang === "fr" ? " j" : " d");
}

function home() {
  return `<section class="hero"><div><h1>${t("heroTitle")}</h1><p class="lead">${t("heroLead")}</p><div class="hero-actions"><button class="primary" onclick="startLearning()">${t("startLearning")}</button><button class="secondary" onclick="go('academy')">${t("exploreAcademy")}</button></div></div><div class="hero-card"><div class="family-illustration"><img src="assets/logo.png" alt="Parent+ Cameroon logo"></div><div class="mini-stat"><span>${t("availableIn")}</span><strong>${t("englishFrench")}</strong></div><div class="mini-stat"><span>${t("designedFor")}</span><strong>${t("mobileLowData")}</strong></div></div></section><section class="section"><div class="section-head"><div><h2>${t("whatHelp")}</h2><p class="muted">${t("heroBrief")}</p></div></div><div class="grid grid-4">${[["📱",t("learn"),t("learnDesc")],["💬",t("getSupport"),t("getSupportDesc")],["📊",t("trackProgress"),t("trackProgressDesc")],["👥",t("engage"),t("engageDesc")]].map(x=>`<article class="card"><div class="icon">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("")}</div></section><section class="section"><div class="callout"><div><h2>${t("builtFor")}</h2><p>${t("builtForDesc")}</p></div><button class="secondary" onclick="go('signup')">${t("createMyProfile")}</button></div></section>`;
}

function academy() {
  const child = selectedChild();
  const needs = ["communication","emotions","discipline","school","autonomy"];
  const needKeys = {communication:"needCommunication",emotions:"needEmotions",discipline:"needDiscipline",school:"needSchool",autonomy:"needAutonomy"};
  let filtered = filteredLessons(child, state.academyNeed, state.academyAge);
  if (!state.academyNeed && !state.academyAge && !child) filtered = lessons;
  const rec = recommendedLessons();
  return `<section class="section"><div class="section-head"><div><h2>${t("academyTitle")}</h2><p class="muted">${t("academyMuted")}</p></div>${state.user?`<span class="pill">${progressPct()}${t("percentCompleted")}</span>`:""}</div><div class="academy-filters card"><div class="filter-group"><label class="filter-label">${t("forWhichChild")}</label>${state.children.length>0?`<select class="filter-select" onchange="selectChildFromAcademy(this.value)">${state.children.map(c=>`<option value="${c.id}" ${child&&c.id===child.id?"selected":""}>${escapeHtml(c.name)}, ${c.age} ${t("years")}</option>`).join("")}</select>`:`<p class="muted">${state.user?t("noChildren"):""}</p>`}</div><div class="filter-group"><label class="filter-label">${t("filterNeed")}</label><div class="filter-pills">${needs.map(n=>`<button class="pill filter-pill ${state.academyNeed===n?"active":""}" onclick="filterAcademyNeed('${n}')">${t(needKeys[n])}</button>`).join("")}</div></div></div>${rec.length>0&&state.user?`<div class="recommended-section"><h3>${child?`${t("recommendedForChild")} ${escapeHtml(child.name)}, ${child.age} ${t("years")}`:t("recommendedFor")}</h3><div class="grid grid-3">${rec.map(l=>`<article class="card course"><div class="course-top"><div class="course-icon">${l.icon}</div><span class="pill">${l.duration}</span></div><h3>${tr(l.title)}</h3><p>${tr(l.cat)} · ${tr(l.level)}</p>${state.user?`<div class="progress"><span style="width:${completed(l.id)?100:0}%"></span></div>`:""}<button class="primary" onclick="startLesson(${l.id})">${completed(l.id)?t("reviewLesson"):t("startLesson")}</button></article>`).join("")}</div></div>`:""}<div class="grid grid-3">${filtered.map(l=>`<article class="card course"><div class="course-top"><div class="course-icon">${l.icon}</div><span class="pill">${l.duration}</span></div><h3>${tr(l.title)}</h3><p>${tr(l.cat)} · ${tr(l.level)}</p>${state.user?`<div class="progress"><span style="width:${completed(l.id)?100:0}%"></span></div>`:""}<button class="primary" onclick="startLesson(${l.id})">${completed(l.id)?t("reviewLesson"):t("startLesson")}</button></article>`).join("")}</div></section>`;
}

function lesson(id) {
  const l = lessons.find(x => x.id === id);
  if (!l) return go("academy");
  curLessonId = id; quizWins[id] = l.quizzes.map(() => false);
  const quizzes = l.quizzes.map((q,i)=>`<article class="card" id="quiz-card-${i}"><h2>${t("quickCheck")} ${i+1}</h2><p>${tr(q.q)}</p>${q.options.map((o,oi)=>`<button type="button" class="quiz-option" onclick="quiz(this,${i},${oi})">${tr(o)}</button>`).join("")}<p id="quizResult-${i}" class="quiz-result"></p></article>`).join("");
  return `<section class="lesson-content"><div class="lesson-hero"><span class="pill">${tr(l.cat)}</span><h1>${l.icon} ${tr(l.title)}</h1><p class="muted">${l.duration} · ${tr(l.level)}</p></div><article class="card"><h2>${t("whyMatters")}</h2><p>${tr(l.why)}</p></article><article class="card"><h2>${t("threeThings")}</h2><ol>${l.points.map(p=>`<li>${tr(p)}</li>`).join("")}</ol><div class="tip"><strong>${t("lessonTip")}</strong> ${tr(l.tip)}</div></article>${quizzes}<div class="lesson-extras"><button class="secondary btn-with-icon" onclick="listenLessonText(this)"><span class="iconic" data-icon="volume"></span> ${t("listenLesson")}</button></div><p id="completionMsg" class="completion-msg"></p><div class="form-actions"><button class="secondary" onclick="go('academy')">${t("back")}</button><button class="primary" onclick="finishLesson(${l.id})">${completed(l.id)?t("completed"):t("markComplete")}</button></div></section>`;
}
function quiz(btn, qi, oi) {
  const card = document.getElementById("quiz-card-"+qi); if (!card) return;
  const l = lessons.find(x=>x.id===curLessonId); if (!l) return;
  const result = document.getElementById("quizResult-"+qi);
  const correct = l.quizzes[qi].correct===oi;
  card.querySelectorAll(".quiz-option.wrong").forEach(x=>x.classList.remove("wrong"));
  if(correct){card.querySelectorAll(".quiz-option").forEach(x=>x.disabled=true);btn.classList.add("correct");result.textContent=t("quizCorrect");result.className="quiz-result correct";if(quizWins[curLessonId])quizWins[curLessonId][qi]=true;}else{btn.classList.add("wrong");result.textContent=t("quizWrong");result.className="quiz-result wrong";}
}
function quizScoreText(won,total){return state.lang==="fr"?`Vous avez ${won}/${total} bonnes réponses. Réessayez.`:`You had ${won}/${total} correct answers. Try again.`;}
function finishLesson(id){
  if(!state.user){showToast(t("toastProfileFirst"));return go("signup");}
  if(completed(id)){showToast(t("toastLessonDone"));go("dashboard");return;}
  const l=lessons.find(x=>x.id===id);const total=l?l.quizzes.length:0;const won=(quizWins[id]||[]).filter(Boolean).length;
  const msg=document.getElementById("completionMsg");
  if(total>0&&won<total){const text=quizScoreText(won,total);if(msg){msg.textContent=text;msg.className="completion-msg error";}showToast(text);return;}
  state.user.progress=state.user.progress||[];state.user.progress.push(id);
  const child=selectedChild();if(child){child.progress=child.progress||[];if(!child.progress.includes(id))child.progress.push(id);}
  save();showToast(t("toastLessonDone"));go("dashboard");
}

let signupChildren = [{name:"", age:""}];
function signupChildRow(i, row) {
  return `<div class="signup-child-row" style="display:flex;gap:8px;align-items:end;margin-bottom:8px"><div style="flex:2"><label>${t("childName")}</label><input id="suChildName${i}" required placeholder="${t("childName")}" value="${escapeHtml(row.name)}"></div><div style="flex:1"><label>${t("childAge")}</label><input id="suChildAge${i}" type="number" min="0" max="18" required placeholder="5" value="${row.age}"></div>${signupChildren.length>1?`<button type="button" class="danger-small" onclick="removeSignupChild(${i})" style="margin-bottom:2px;height:38px">${t("deleteChild")}</button>`:""}</div>`;
}
function saveSignupChildrenValues() {
  for (let i = 0; i < signupChildren.length; i++) {
    const nameEl = document.getElementById("suChildName" + i);
    const ageEl = document.getElementById("suChildAge" + i);
    if (nameEl) signupChildren[i].name = nameEl.value;
    if (ageEl) signupChildren[i].age = ageEl.value;
  }
}
function removeSignupChild(i) { saveSignupChildrenValues(); signupChildren.splice(i, 1); rerenderSignupChildren(); }
function addSignupChild() { saveSignupChildrenValues(); signupChildren.push({name:"", age:""}); rerenderSignupChildren(); }
function rerenderSignupChildren() {
  const container = document.getElementById("suChildrenList");
  if (!container) return;
  container.innerHTML = signupChildren.map((r, i) => signupChildRow(i, r)).join("") + `<button type="button" class="secondary small" onclick="addSignupChild()" style="margin-top:4px">+ ${t("addChild")}</button>`;
}
function signup(){
  signupChildren = [{name:"", age:""}];
  return `<section class="section"><div class="form-card card"><button class="secondary small btn-with-icon" onclick="back()"><span class="iconic" data-icon="chevron-left"></span>${t("back")}</button><h2>${t("signupTitle")}</h2><p class="muted">${t("signupMuted")}</p><form onsubmit="doSignup(event)"><div><label>${t("fullName")}</label><input id="suName" required placeholder="${t("namePlaceholder")}"></div><div><label style="display:block;margin-bottom:6px">${t("myChildren")}</label><div id="suChildrenList">${signupChildRow(0, {name:"",age:""})}<button type="button" class="secondary small" onclick="addSignupChild()" style="margin-top:4px">+ ${t("addChild")}</button></div></div><div><label>${t("email")}</label><input id="suEmail" type="email" required placeholder="name@example.com"></div><div><label>${t("password")}</label><div class="password-wrap"><input id="suPassword" type="password" required minlength="6"><button type="button" class="eye-toggle" aria-label="${t("showPassword")}" onclick="togglePw(this)"><span class="iconic" data-icon="eye"></span></button></div></div><div class="terms-row"><input id="suTerms" type="checkbox" required><label for="suTerms">${t("acceptTermsA")}<a href="#terms">${t("termsWord")}</a>${t("acceptTermsB")}<a href="#terms">${t("privacyWord")}</a></label></div><button class="primary" type="submit">${t("createAccount")}</button></form><p class="auth-note">${t("alreadyAccount")} <a href="#login">${t("loginLink")}</a></p></div></section>`;
}
function togglePw(btn){const wrap=btn.closest(".password-wrap");if(!wrap)return;const input=wrap.querySelector("input");const icon=btn.querySelector(".iconic");const show=input.type==="password";input.type=show?"text":"password";if(icon)icon.dataset.icon=show?"eye-off":"eye";btn.setAttribute("aria-label",show?t("hidePassword"):t("showPassword"));}
function doSignup(e){
  e.preventDefault();const name=document.getElementById("suName").value.trim();const email=document.getElementById("suEmail").value.trim().toLowerCase();const password=document.getElementById("suPassword").value;
  if(!document.getElementById("suTerms").checked){showToast(t("acceptRequired"));return;}if(password.length<6){showToast(t("passwordShort"));return;}if(!name||!email){showToast(t("acceptRequired"));return;}
  const childrenData=[];
  for(let i=0;i<signupChildren.length;i++){
    const cname=(document.getElementById("suChildName"+i)||{}).value||"";
    const cage=parseInt((document.getElementById("suChildAge"+i)||{}).value);
    if(cname.trim()&&!isNaN(cage)){childrenData.push({name:cname.trim(),age:cage});}
  }
  if(childrenData.length===0){showToast(t("acceptRequired"));return;}
  const users=getUsers();if(users.some(u=>u.email===email)){showToast(t("emailAlreadyUsed"));return;}
  const user={name,email,password,childAge:childrenData[0].age,progress:[],createdAt:Date.now(),children:childrenData,onboardingDone:false,onboardingGoals:[],onboardingOther:""};users.push(user);saveUsers(users);state.user=user;save();
  childrenData.forEach(c=>addChild(c.name,c.age));
  initNotifications();showToast(t("accountCreated"));go("onboarding");
}

// Onboarding: ask parents what they'd like to improve, right after signup.
let onboardingSelected=[];
function onboarding(){
  if(!state.user)return go("signup");
  if(state.user.onboardingDone)return go("dashboard");
  onboardingSelected=state.user.onboardingGoals?[...state.user.onboardingGoals]:[];
  const otherChecked=onboardingSelected.includes("other");
  const otherValue=state.user.onboardingOther||"";
  return `<section class="section"><div class="form-card card onboarding-card" style="max-width:640px"><h2>${t("onboardingTitle")}</h2><p class="muted">${t("onboardingMuted")}</p><form onsubmit="doOnboarding(event)"><div class="onboarding-options">${onboardingGoals.map(g=>`<label class="onboarding-option${onboardingSelected.includes(g.id)?" active":""}"><input type="checkbox" name="onboardingGoal" value="${g.id}" ${onboardingSelected.includes(g.id)?"checked":""} onchange="toggleOnboardingOption(this)"><span class="onboarding-option-icon">${onboardingIconSvgs[g.icon]}</span><span class="onboarding-option-text"><strong>${t(g.titleKey)}</strong><span class="muted">${t(g.descKey)}</span></span></label>`).join("")}<label class="onboarding-option${otherChecked?" active":""}"><input type="checkbox" name="onboardingGoal" value="other" ${otherChecked?"checked":""} onchange="toggleOnboardingOption(this)"><span class="onboarding-option-icon">${onboardingIconSvgs["pencil"]}</span><span class="onboarding-option-text"><strong>${t("onboardingOptionOther")}</strong></span></label></div><div id="onboardingOtherWrap" style="display:${otherChecked?"block":"none"};margin-top:10px"><textarea id="onboardingOtherInput" rows="3" placeholder="${t("onboardingOtherPlaceholder")}">${escapeHtml(otherValue)}</textarea></div><div class="form-actions" style="margin-top:20px"><button type="button" class="secondary" onclick="skipOnboarding()">${t("onboardingSkip")}</button><button class="primary" type="submit">${t("onboardingSubmit")}</button></div></form></div></section>`;
}
function toggleOnboardingOption(input){
  const label=input.closest(".onboarding-option");
  if(label)label.classList.toggle("active",input.checked);
  if(input.value==="other"){
    const wrap=document.getElementById("onboardingOtherWrap");
    if(wrap)wrap.style.display=input.checked?"block":"none";
  }
}
function doOnboarding(e){
  e.preventDefault();
  const checked=[...document.querySelectorAll('input[name="onboardingGoal"]:checked')].map(i=>i.value);
  const otherInput=document.getElementById("onboardingOtherInput");
  const otherText=otherInput?otherInput.value.trim():"";
  if(checked.length===0||(checked.length===1&&checked[0]==="other"&&!otherText)){showToast(t("onboardingSelectRequired"));return;}
  state.user.onboardingGoals=checked;
  state.user.onboardingOther=checked.includes("other")?otherText:"";
  state.user.onboardingDone=true;
  save();
  showToast(t("onboardingToast"));
  go("onboarding-thanks");
}
function skipOnboarding(){
  state.user.onboardingGoals=[];
  state.user.onboardingOther="";
  state.user.onboardingDone=true;
  save();
  go("dashboard");
}
function onboardingThanks(){
  if(!state.user)return go("signup");
  setTimeout(()=>{ if((location.hash.replace("#","")||"")==="onboarding-thanks") go("dashboard"); },3000);
  return `<section class="section"><div class="form-card card" style="text-align:center;max-width:520px"><div style="font-size:48px;margin-bottom:16px">💚</div><h2>${t("onboardingThanksTitle")}</h2><p class="muted">${t("onboardingThanksMsg")}</p></div></section>`;
}

function login(){
  return `<section class="section"><div class="form-card card"><button class="secondary small btn-with-icon" onclick="back()"><span class="iconic" data-icon="chevron-left"></span>${t("back")}</button><h2>${t("loginTitle")}</h2><form onsubmit="doLogin(event)"><div><label>${t("email")}</label><input id="liEmail" type="email" required placeholder="name@example.com"></div><div><label>${t("password")}</label><div class="password-wrap"><input id="liPassword" type="password" required><button type="button" class="eye-toggle" aria-label="${t("showPassword")}" onclick="togglePw(this)"><span class="iconic" data-icon="eye"></span></button></div></div><div class="auth-note" style="text-align:left"><a href="#forgot">${t("forgotPassword")}</a></div><button class="primary" type="submit">${t("loginBtnLabel")}</button><p id="loginMsg" class="form-msg"></p></form><p class="auth-note">${t("noAccount")} <a href="#signup">${t("signupLink")}</a></p></div></section>`;
}
function doLogin(e){
  e.preventDefault();const email=document.getElementById("liEmail").value.trim().toLowerCase();const password=document.getElementById("liPassword").value;const msg=document.getElementById("loginMsg");const users=getUsers();const u=users.find(x=>x.email===email&&x.password===password);
  if(!u){if(msg){msg.textContent=t("invalidCredentials");msg.className="form-msg error";}return;}
  state.user={name:u.name,email:u.email,password:u.password,childAge:u.childAge,progress:u.progress||[],onboardingDone:u.onboardingDone||false,onboardingGoals:u.onboardingGoals||[],onboardingOther:u.onboardingOther||""};state.childAge=u.childAge||state.childAge;
  state.children=[];state.selectedChildId=null;
  if(u.children&&u.children.length>0){u.children.forEach(c=>{const child=addChild(c.name,c.age);if(c.progress)child.progress=c.progress;});save();}
  if(msg){msg.textContent=t("loggedIn");msg.className="form-msg success";}initNotifications();setTimeout(()=>{save();showToast(t("loggedIn"));go(state.user.onboardingDone?"dashboard":"onboarding");},900);
}
function forgot(){return `<section class="section"><div class="form-card card"><button class="secondary small btn-with-icon" onclick="back()"><span class="iconic" data-icon="chevron-left"></span>${t("back")}</button><span class="eyebrow">${t("forgotTitle")}</span><h2>${t("forgotTitle")}</h2><p class="muted">${t("forgotMuted")}</p><form onsubmit="doForgot(event)"><div><label>${t("email")}</label><input id="foEmail" type="email" required placeholder="name@example.com"></div><button class="primary" type="submit">${t("sendLink")}</button></form></div></section>`;}
function doForgot(e){e.preventDefault();showToast(t("resetSent"));go("login");}
function terms(){return `<section class="section"><div class="form-card card"><button class="secondary small btn-with-icon" onclick="back()"><span class="iconic" data-icon="chevron-left"></span>${t("back")}</button><span class="eyebrow">${t("termsTitle")}</span><h2>${t("termsTitle")}</h2><p>${t("termsBody")}</p></div></section>`;}

function dashboard(){
  if(!state.user)return go("signup");const child=selectedChild();const next=lessons.find(l=>!completed(l.id));
  const tip=parentingTips[Math.floor(Date.now()/86400000)%parentingTips.length];const pts=calculatePoints();
  const progDisplay=child?childProgressPct(child):progressPct();const completedCount=child?childProgress(child).length:(state.user.progress||[]).length;
  const childSelector=state.children.length>1?`<div style="margin-bottom:14px"><label class="filter-label">${t("forWhichChild")}</label><select class="filter-select" onchange="selectChildFromAcademy(this.value)">${state.children.map(c=>`<option value="${c.id}" ${child&&c.id===child.id?"selected":""}>${escapeHtml(c.name)}, ${c.age} ${t("years")}</option>`).join("")}</select></div>`:"";
  const continueLabel=child?t("continuePath")+" "+escapeHtml(child.name):t("continuePath");
  return `<section class="dashboard"><div class="dashboard-header"><div><h1>${t("welcome")} ${escapeHtml(state.user.name)} 👋</h1>${child?`<p class="muted">${t("recommendedForChild")} ${escapeHtml(child.name)}, ${child.age} ${t("years")}</p>`:""}</div></div>${childSelector}<div class="dashboard-section-title"><h3>${t("yourJourney")}</h3></div><div class="kpis"><div class="card kpi"><strong>${progDisplay}%</strong><span>${t("learningProgress")}</span></div><div class="card kpi"><strong>${completedCount} / ${lessons.length}</strong><span>${t("lessonsCompleted")}</span></div><div class="card kpi"><strong>${Math.min(completedCount,7)} ${t("days")}</strong><span>🔥 ${t("streak")}</span></div><div class="card kpi"><strong>${pts}</strong><span>🏆 ${t("points")}</span></div></div><div class="dashboard-grid" style="margin-top:18px"><div class="card"><div class="section-head"><div><h2>${t("todayTitle")}</h2><p class="muted">${continueLabel}</p></div></div>${next?`<div class="lesson-row"><div class="check">${next.icon}</div><div><strong>${tr(next.title)}</strong><div class="muted">${next.duration} · ${tr(next.cat)}</div></div><button class="primary small" onclick="go('lesson-${next.id}')">${t("continue")}</button></div>`:`<div class="success alert">${t("allDone")}</div>`}</div><div class="card"><h3>💡 ${t("dashTipTitle")}</h3><p>${tr(tip)}</p><button class="secondary" onclick="go('support')" style="margin-top:12px">${t("moreSupport")}</button></div></div>${child?`<div class="card" style="margin-top:18px"><h3>${t("progressLabel")} ${escapeHtml(child.name)}</h3><div class="progress"><span style="width:${childProgressPct(child)}%"></span></div><p class="muted">${childProgress(child).length} ${t("lessonsCompleted")}</p></div>`:""}</section>`;
}

function support(){
  return `<section class="section"><div class="section-head"><div><h2>${t("whatsHappening")}</h2><p class="muted">${t("supportMuted")}</p></div></div><div class="grid grid-3">${situations.map(s=>`<article class="card situation-card" onclick="viewGuidance(${s.supportId})"><div class="situation-icon">${s.icon}</div><h3>${t("situation"+s.key.charAt(0).toUpperCase()+s.key.slice(1))}</h3><button class="secondary small">${t("viewGuidance")}</button></article>`).join("")}</div><div class="callout" style="margin-top:25px"><div><h2>${t("needFeedback")}</h2><p>${t("feedbackHelps")}</p></div><button class="secondary" onclick="openFeedback()">${t("giveFeedback")}</button></div></section>`;
}

function guidance(id){
  const s=supportTopics.find(x=>x.id===id);if(!s)return go("support");
  return `<section class="lesson-content"><div class="lesson-hero"><span class="eyebrow">${t("guidanceEyebrow")}</span><h1>${s.icon} ${tr(s.title)}</h1></div><article class="card"><h3>${t("whatYouCanTry")}</h3><p>${tr(s.detail)}</p></article><div class="form-actions"><button class="secondary" onclick="go('support')">← ${t("backToSupport")}</button></div></section>`;
}

function community(){
  const tab=state.communityTab||"campaigns";const tabs=[["campaigns","campaigns"],["resources","resources"],["events","events"]];const items=communityPosts[tab]||[];
  return `<section class="section"><div class="section-head"><div><h2>${t("communityTitle")}</h2><p class="muted">${t("communityMuted")}</p></div></div><div class="community-tabs">${tabs.map(([key,label])=>`<button class="community-tab ${tab===key?"active":""}" onclick="switchCommunityTab('${key}')">${t(label)}</button>`).join("")}</div><div class="grid grid-3">${items.map(item=>`<article class="card community-post"><div class="post-head"><div class="avatar">${item.icon}</div><strong>Parent+ Cameroon</strong></div><h3>${tr(item.title)}</h3><p>${tr(item.text)}</p><span class="pill">${tr(item.pill)}</span></article>`).join("")}</div></section>`;
}
function switchCommunityTab(tab){state.communityTab=tab;render();}

function feedback(){
  if(!state.user)return go("signup");
  return `<section class="section"><div class="form-card card"><h2>${t("feedbackTitle")}</h2><form onsubmit="submitFeedback(event)"><div><label>${t("howSatisfied")}</label><select id="rating" required><option value="">${t("choose")}</option><option>${t("verySatisfied")}</option><option>${t("satisfied")}</option><option>${t("neutral")}</option><option>${t("notSatisfied")}</option></select></div><div><label>${t("whatUseful")}</label><textarea id="comment" rows="5" required placeholder="${t("feedbackPlaceholder")}"></textarea></div><button class="primary">${t("submitFeedback")}</button></form></div></section>`;
}
function submitFeedback(e){e.preventDefault();go("feedback-confirm");}
function feedbackConfirmation(){return `<section class="section"><div class="form-card card" style="text-align:center"><div style="font-size:48px;margin-bottom:16px">💚</div><h2>${t("feedbackConfirmation")}</h2><p class="muted">${t("feedbackConfirmMsg")}</p><div class="profile-stars">⭐⭐⭐⭐⭐</div><button class="primary" onclick="go('dashboard')" style="margin-top:20px">${t("backToHome")}</button></div></section>`;}

function profile(){
  if(!state.user)return go("signup");const u=state.user;const child=selectedChild();const badges=getBadges();const pts=calculatePoints();const unlockedCount=badges.filter(b=>b.unlocked).length;
  return `<section class="section"><div class="form-card card profile-card"><div class="avatar avatar-lg">${escapeHtml(initials(u.name))}</div><h2>${escapeHtml(u.name)}</h2><div class="profile-info"><div class="profile-row"><span>${t("email")}</span><strong>${escapeHtml(u.email)}</strong></div></div><div class="profile-section"><h3>${t("myChildren")}</h3>${state.children.length>0?state.children.map(c=>`<div class="profile-child-row ${state.selectedChildId===c.id?"selected":""}"><div class="profile-child-info"><strong>${escapeHtml(c.name)}</strong><span class="muted">${c.age} ${t("years")} · ${c.ageGroup}</span></div><div class="profile-child-actions"><button class="secondary small" onclick="go('edit-child-${c.id}')">${t("editChild")}</button><button class="secondary small danger-small" onclick="deleteChildConfirm('${c.id}')">${t("deleteChild")}</button></div></div>`).join(""):`<p class="muted">${t("noChildren")}</p>`}<button class="secondary" onclick="go('add-child')" style="margin-top:12px">${t("addChild")}</button></div><div class="profile-section"><h3>${t("myRewards")}</h3><div class="rewards-summary"><span class="rewards-points">🏆 ${pts} ${t("points")}</span><span class="rewards-badges">${unlockedCount}/${badges.length}</span></div><div class="badges-grid">${badges.map(b=>`<div class="badge-card ${b.unlocked?"unlocked":"locked"}"><span class="badge-icon">${b.icon}</span><strong>${t(b.titleKey)}</strong><span class="muted">${t(b.descKey)}</span>${!b.unlocked?`<span class="badge-lock">${t("badgeLocked")}</span>`:""}</div>`).join("")}</div></div><div class="profile-section"><div class="progress"><span style="width:${progressPct()}%"></span></div><p><strong>${progressPct()}%</strong> ${t("profileProgress")}</p></div><div class="profile-section"><button class="secondary" onclick="go('settings')" style="width:100%;justify-content:center">⚙️ ${t("settings")}</button></div><button class="danger btn-with-icon" onclick="logout()"><span class="iconic" data-icon="log-out"></span>${t("logout")}</button></div></section>`;
}
function logout(){state.user=null;state.children=[];state.selectedChildId=null;save();showToast(t("toastLoggedOut"));go("home");}
function addChildView(){
  return `<section class="section"><div class="form-card card"><button class="secondary small btn-with-icon" onclick="go('profile')"><span class="iconic" data-icon="chevron-left"></span>${t("back")}</button><h2>${t("addChildTitle")}</h2><form onsubmit="doAddChild(event)"><div><label>${t("childName")}</label><input id="childNameInput" required placeholder="${t("childName")}"></div><div><label>${t("childAge")}</label><input id="childAgeInput" type="number" min="0" max="18" required placeholder="5"></div><div class="form-actions"><button type="button" class="secondary" onclick="go('profile')">${t("cancel")}</button><button class="primary" type="submit">${t("saveChild")}</button></div></form></div></section>`;
}
function doAddChild(e){
  e.preventDefault();const name=document.getElementById("childNameInput").value.trim();const age=parseInt(document.getElementById("childAgeInput").value);
  if(!name||isNaN(age)){showToast(t("acceptRequired"));return;}
  addChild(name,age);showToast(t("toastWelcome"));go("profile");
}
function editChildView(id){
  const child=state.children.find(c=>c.id===id);if(!child)return go("profile");
  return `<section class="section"><div class="form-card card"><button class="secondary small btn-with-icon" onclick="go('profile')"><span class="iconic" data-icon="chevron-left"></span>${t("back")}</button><h2>${t("editChild")}</h2><form onsubmit="doEditChild(event,'${id}')"><div><label>${t("childName")}</label><input id="editChildName" required value="${escapeHtml(child.name)}"></div><div><label>${t("childAge")}</label><input id="editChildAge" type="number" min="0" max="18" required value="${child.age}"></div><div class="form-actions"><button type="button" class="secondary" onclick="go('profile')">${t("cancel")}</button><button class="primary" type="submit">${t("saveChild")}</button></div></form></div></section>`;
}
function doEditChild(e,id){
  e.preventDefault();const name=document.getElementById("editChildName").value.trim();const age=parseInt(document.getElementById("editChildAge").value);
  if(!name||isNaN(age)){showToast(t("acceptRequired"));return;}
  updateChild(id,name,age);showToast(t("toastLessonDone"));go("profile");
}

function notificationsView(){
  if(!state.user)return go("signup");
  const typeIcons={lesson:"🟢",tip:"💡",progress:"🎯",reminder:"🔔"};
  return `<section class="section"><div class="section-head"><div><h2>${t("notifications")}</h2></div>${state.notifications.some(n=>!n.read)?`<button class="secondary small" onclick="markAllNotificationsRead();render()">${t("markAllRead")}</button>`:""}</div><div class="notifications-list">${state.notifications.length===0?`<p class="muted">${t("noNotifications")}</p>`:state.notifications.map(n=>`<div class="notification-card ${n.read?"read":"unread"}" onclick="readNotification('${n.id}','${n.type}')"><span class="notif-icon">${typeIcons[n.type]||"🔔"}</span><div class="notif-content"><strong>${t(n.titleKey)}</strong><p>${t(n.messageKey)}</p><span class="notif-time">${timeSince(n.timestamp)}</span></div></div>`).join("")}</div></section>`;
}
function readNotification(id,type){markNotificationRead(id);if(type==="lesson")go("academy");else if(type==="tip")go("dashboard");else if(type==="progress")go("dashboard");else go("notifications");}

function settingsView(){
  if(!state.user)return go("signup");const np=state.notificationPrefs;
  return `<section class="section"><div class="form-card card"><button class="secondary small btn-with-icon" onclick="go('profile')"><span class="iconic" data-icon="chevron-left"></span>${t("back")}</button><h2>⚙️ ${t("settings")}</h2><div class="settings-section"><h3>${t("account")}</h3><div class="settings-item" onclick="go('settings-personal')"><span>${t("personalInfo")}</span><span class="muted">›</span></div><div class="settings-item" onclick="go('settings-password')"><span>${t("changePassword")}</span><span class="muted">›</span></div></div><div class="settings-section"><h3>${t("preferences")}</h3><div class="settings-item" onclick="toggleLangSetting()"><span>${t("langSetting")}</span><span class="muted">${t("langLabel")}</span></div><div class="settings-item" onclick="toggleTheme()"><span>${t("appearance")}</span><span class="muted">${state.theme==="dark"?t("darkMode"):t("lightMode")}</span></div><div class="settings-item"><span>${t("notifSetting")}</span></div><div class="settings-sub-item"><label><input type="checkbox" ${np.reminders?"checked":""} onchange="toggleNotifPref('reminders')"> ${t("notifReminders")}</label></div><div class="settings-sub-item"><label><input type="checkbox" ${np.weekly?"checked":""} onchange="toggleNotifPref('weekly')"> ${t("notifWeekly")}</label></div></div><div class="settings-section"><h3>${t("privacySetting")}</h3><div class="settings-item" onclick="go('settings-privacy')"><span>${t("privacySetting")}</span><span class="muted">›</span></div><div class="settings-item" onclick="go('settings-terms')"><span>${t("termsSetting")}</span><span class="muted">›</span></div></div></div></section>`;
}
function settingsPersonal(){
  if(!state.user)return go("signup");const u=state.user;
  return `<section class="section"><div class="form-card card"><button class="secondary small btn-with-icon" onclick="go('settings')"><span class="iconic" data-icon="chevron-left"></span>${t("back")}</button><h2>${t("personalInfo")}</h2><form onsubmit="savePersonalInfo(event)"><div><label>${t("fullName")}</label><input id="settingsName" value="${escapeHtml(u.name)}" required></div><div><label>${t("email")}</label><input id="settingsEmail" type="email" value="${escapeHtml(u.email)}" required readonly style="opacity:0.7"></div><div class="form-actions"><button class="primary" type="submit">${t("saveChild")}</button></div></form></div></section>`;
}
function savePersonalInfo(e){
  e.preventDefault();const name=document.getElementById("settingsName").value.trim();if(!name){showToast(t("acceptRequired"));return;}
  state.user.name=name;save();showToast(t("profileUpdated"));go("settings");
}
function settingsPassword(){
  if(!state.user)return go("signup");
  return `<section class="section"><div class="form-card card"><button class="secondary small btn-with-icon" onclick="go('settings')"><span class="iconic" data-icon="chevron-left"></span>${t("back")}</button><h2>${t("changePassword")}</h2><form onsubmit="doChangePassword(event)"><div><label>${t("currentPassword")}</label><input id="currentPw" type="password" required></div><div><label>${t("newPassword")}</label><input id="newPw" type="password" required minlength="6"></div><div><label>${t("confirmPassword")}</label><input id="confirmPw" type="password" required minlength="6"></div><div class="form-actions"><button class="primary" type="submit">${t("saveChild")}</button></div></form></div></section>`;
}
function doChangePassword(e){
  e.preventDefault();const cur=document.getElementById("currentPw").value;const nw=document.getElementById("newPw").value;const cf=document.getElementById("confirmPw").value;
  if(!cur){showToast(t("passwordRequired"));return;}if(cur!==state.user.password){showToast(t("invalidCredentials"));return;}if(nw!==cf){showToast(t("passwordMismatch"));return;}if(nw.length<6){showToast(t("passwordShort"));return;}
  state.user.password=nw;save();showToast(t("passwordChanged"));go("settings");
}
function settingsPrivacy(){return `<section class="section"><div class="form-card card"><button class="secondary small btn-with-icon" onclick="go('settings')"><span class="iconic" data-icon="chevron-left"></span>${t("back")}</button><h2>${t("privacySetting")}</h2><div class="alert"><p>${t("privacyInfo")}</p></div><div class="settings-section" style="margin-top:16px"><h3>${t("offlineLessons")}</h3><p class="muted">${state.offlineLessons.length} ${t("offlineLessonsDesc")}</p></div></div></section>`;}
function settingsTerms(){return `<section class="section"><div class="form-card card"><button class="secondary small btn-with-icon" onclick="go('settings')"><span class="iconic" data-icon="chevron-left"></span>${t("back")}</button><h2>${t("termsSetting")}</h2><p>${t("termsInfo")}</p></div></section>`;}

function render() {
  const v = location.hash.replace("#", "") || "home";
  prevView = lastView; lastView = v;
  const base = v.split("-")[0];
  const auth = ["login", "signup", "forgot", "terms", "register"];
  if (state.user && auth.includes(base)) return go(state.user.onboardingDone ? "dashboard" : "onboarding");
  if (state.user && !state.user.onboardingDone && base !== "onboarding") { firstRender = false; return go("onboarding"); }
  if (state.user && firstRender && v === "home") { firstRender = false; return go("dashboard"); }
  firstRender = false;
  let html;
  if (v.startsWith("lesson-")) {
    if (!state.user) return go("signup");
    html = lesson(Number(v.split("-")[1]));
  } else if (v.startsWith("guidance-")) {
    if (!state.user) return go("signup");
    html = guidance(Number(v.split("-")[1]));
  } else if (v.startsWith("edit-child-")) {
    if (!state.user) return go("signup");
    html = editChildView(v.replace("edit-child-", ""));
  } else {
    const pages = { home, academy, support, community, feedback, login, signup, forgot, terms, profile, dashboard, register: signup,
      "notifications": notificationsView, "settings": settingsView, "add-child": addChildView,
      "feedback-confirm": feedbackConfirmation, "settings-personal": settingsPersonal,
      "settings-password": settingsPassword, "settings-privacy": settingsPrivacy, "settings-terms": settingsTerms,
      "onboarding": onboarding, "onboarding-thanks": onboardingThanks
    };
    html = (pages[v] || home)();
  }
  const focusView = ["login", "signup", "forgot", "terms", "register", "onboarding"].includes(base);
  app.className = ["academy", "lesson", "guidance"].includes(base) ? "view-compact" : "";
  if (state.user && !focusView) {
    document.body.classList.add("logged-in");
    app.innerHTML = `<div class="layout"><aside class="sidebar">${sidebar()}</aside><div class="content">${html}</div></div>`;
  } else {
    document.body.classList.remove("logged-in");
    app.innerHTML = html;
  }
  updateTopBar();
  const siteFooter = document.getElementById("siteFooter");
  if (siteFooter) siteFooter.style.display = base === "home" ? "" : "none";
  window.scrollTo(0, 0);
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-view]");
  if (b) go(b.dataset.view);
});
// On touch/mobile, briefly reveal the text label under a topbar nav icon when pressed.
document.addEventListener("pointerdown", e => {
  const navBtn = e.target.closest(".topbar nav button");
  if (!navBtn) return;
  navBtn.classList.add("touched");
  clearTimeout(navBtn._touchTimer);
  navBtn._touchTimer = setTimeout(() => navBtn.classList.remove("touched"), 1200);
});
document.getElementById("loginBtn").onclick = () => go(state.user ? "profile" : "signup");
document.getElementById("langBtn").onclick = () => { state.lang = state.lang === "en" ? "fr" : "en"; save(); applyLang(); render(); showToast(t("langChanged")); };
document.getElementById("themeBtn").onclick = () => { state.theme = state.theme === "dark" ? "light" : "dark"; save(); applyTheme(); };
function toggleTheme() { state.theme = state.theme === "dark" ? "light" : "dark"; save(); applyTheme(); }
document.getElementById("notifBtn").onclick = () => { if (!state.user) { go("signup"); return; } go("notifications"); };
window.addEventListener("hashchange", render);
applyTheme(); applyLang(); render();