(() => {
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
        name      : string;
        gender    : Gender;
        birthdate : Date;
    }

    class User extends Person {
        public email      : string;
        public role       : string;
        public lastAccess : Date;
        constructor({ email, role, birthdate, gender, name}: UserProps ){
            super({ name, gender, birthdate})
            this.email      = email;
            this.role       = role;
            this.lastAccess = new Date();
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

    class UserSettings extends User {
        public lastOpenFolder: string;
        public workingDirectory : string;
        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate,
        }: UserSettingsProps){
            super({ email, role, name, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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