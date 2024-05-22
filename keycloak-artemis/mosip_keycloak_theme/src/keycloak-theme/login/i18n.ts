import { createUseI18n } from "keycloakify/login";

export const { useI18n } = createUseI18n({
    // NOTE: Here you can override the default i18n messages
    // or define new ones that, for example, you would have
    // defined in the Keycloak admin UI for UserProfile
    // https://user-images.githubusercontent.com/6702424/182050652-522b6fe6-8ee5-49df-aca3-dba2d33f24a5.png
    en: {
        alphanumericalCharsOnly: "Only alphanumerical characters",
        gender: "Gender",
        // Here we overwrite the default english value for the message "doForgotPassword"
        // that is "Forgot Password?" see: https://github.com/InseeFrLab/keycloakify/blob/f0ae5ea908e0aa42391af323b6d5e2fd371af851/src/lib/i18n/generated_messages/18.0.1/login/en.ts#L17
        invalidUserMessage: "Invalid username or password.",
        usernameOrEmail: "Username",
        doLogIn:"Login",
        loginDesc:"Please enter your username and password to login.",
        regDesc:"Please fill in the below fields to register as partner.",
        namePlaceholder:"Enter username",
        passwordPlaceholder:"Enter Password",
        noAccount:"Not a member yet?",
        doRegister:"Register",
        partnerType: "Partner Type",
        selectAnOption: "Select Partner Type",
        orgName: "Organisation Name",
        address: "Address",
        email: "Email Address",
        backToLogin: "Back",
        firstNamePH: "Enter First Name",
        lastNamePH: "Enter Last Name",
        orgnamePH: "Enter Organisation Name",
        addressPH: "Enter Address",
        emailPH: "Enter Email Address",
        phoneNumberPH: "Enter Phone Number",
        userNamePH: "Enter Username",
        alreadyMember: "Already a member?",
        requiredFields: "All fields are required, except ones marked as optional",
        missingPartnerTypeMessage: "Please specify partner type",
        logInErrorMsg: "Entered Email Address or Password invalid!",
        registerErrorMsg: "Please fill all the required fields",
        passwordInfo: "Use 8 or more characters with at least one upper and lower case alphabet, atleast one special character.",
        inputErrorMsg: "Please enter",
        orgInfoMsg: "Enter the organisation name as mentioned in ORGANISATION ATTRIBUTE of CERTIFICATE SUBJECT in CA Signed Certificate",
        existingEmailErr: "Email already exists.",
        invalidEmailErr: "Invalid email address.",
        passwordConditions: "Password does not meet the minimum requirements. Please try again.",
        passwordNotMatch: "Password and Confirm password do not match. Try again.",
        invalidPhoneNo: "Please Enter valid Phone Number",
        forgotPasswordDesc: "Please enter your registered email address and we will send you instructions on to your email on how to create a new password.",
        resetPassword: "Reset Password",
        rememberPW: "Remember Password?",
        nosearchData: "Data not found in the dropdown list"
    },
    fr: {
        /* spell-checker: disable */
        alphanumericalCharsOnly: "Caractère alphanumérique uniquement",
        gender: "Genre",
        invalidUserMessage: "Nom d'utilisateur ou mot de passe invalide. (ce message a été écrasé dans le thème)",
        usernameOrEmail: "Nom d'utilisateur ou courriel",
        doLogIn:"Se connecter",
        loginDesc:"Merci d'entrer votre nom d'utilisateur et votre mot de passe pour vous connecter.",
        regDesc:"Veuillez remplir les champs ci-dessous pour vous inscrire en tant que partenaire.",
        namePlaceholder:"Saisissez votre nom d'utilisateur",
        passwordPlaceholder:"Entrer le mot de passe",
        noAccount:"Pas encore membre?",
        doRegister:"Registre",
        partnerType: "Type de partenaire",
        selectAnOption: "Sélectionnez le type de partenaire",
        orgName: "Nom de l'organisme",
        address: "Adresse",
        email: "Adresse e-mail",
        backToLogin: "Dos",
        firstNamePH: "Entrez votre prénom",
        lastNamePH: "Entrer le nom de famille",
        orgnamePH: "Entrez le nom de l'organisation",
        addressPH: "Entrer l'adresse",
        emailPH: "Entrer l'adresse e-mail",
        phoneNumberPH: "Entrez le numéro de téléphone",
        userNamePH: "Saisissez votre nom d'utilisateur",
        alreadyMember: "Déjà membre?",

        requiredFields: "All fields are required, except ones marked as optional",
        missingPartnerTypeMessage:"Please specify partner type",
        logInErrorMsg: "Entered Email Address or Password invalid!",
        registerErrorMsg: "Please fill all the required fields",
        passwordInfo: "Use 8 or more characters with at least one upper and lower case alphabet, atleast one special character.",
        inputErrorMsg: "Please enter",
        orgInfoMsg:"Enter the organisation name as mentioned in ORGANISATION ATTRIBUTE of CERTIFICATE SUBJECT in CA Signed Certificate",
        existingEmailErr: "Email already exists.",
        invalidEmailErr: "Invalid email address.",
        passwordConditions: "Password does not meet the minimum requirements. Please try again.",
        passwordNotMatch: "Password and Confirm password do not match. Try again.",
        invalidPhoneNo:"Please Enter valid Phone Number",
        forgotPasswordDesc: "Please enter your registered email address and we will send you instructions on to your email on how to create a new password.",
        resetPassword: "Reset Password",
        rememberPW:"Remember Password?",
        nosearchData: "Data not found in the dropdown list"
        /* spell-checker: enable */
    }
});

export type I18n = NonNullable<ReturnType<typeof useI18n>>;
