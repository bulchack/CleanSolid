(() => {
    // Aplicando el principio de responsabilidad unica.
    // Priorizar la composicion frente a la herencia.
    type Gender = 'M' | 'F';

    interface PersonProps {
        name      : string;
        gender    : Gender;
        birthdate : Date;
    }

    class Person {
        public name      : string;
        public gender    : Gender;
        public birthdate : Date;

        constructor({ name, gender, birthdate }: PersonProps ){
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email     : string;
        role      : string;
    }

    class User {
        public email      : string;
        public role       : string;
        public lastAccess : Date;
        constructor({ email, role}: UserProps ){
            this.email      = email;
            this.role       = role;
            this.lastAccess = new Date();
        }
    }

    interface SettingsProps {
        lastOpenFolder: string,
        workingDirectory: string,
    }

    class Settings {
        public lastOpenFolder: string;
        public workingDirectory : string;
        constructor({
            workingDirectory,
            lastOpenFolder,
        }: SettingsProps){ 
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProps {
        birthdate: Date,
        email: string,
        gender: Gender,
        lastOpenFolder: string,
        name: string,
        role: string,
        workingDirectory: string,
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;
        constructor({
            name,birthdate, gender,
            email, role,
            lastOpenFolder, workingDirectory
        }: UserSettingsProps){
            this.person = new Person({ name, birthdate, gender});
            this.user = new User({ email, role});
            this.settings = new Settings({ workingDirectory, lastOpenFolder})
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: 'home',
        email: 'jesuseovalles@gmail.com',
        role: 'Admin',
        name: 'Jesus',
        gender: 'M',
        birthdate: new Date('1985-10-21')
    });

    console.log(userSettings)
})();