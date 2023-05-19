var config = {
    user: 'sa',
    password: '12345678',
    server: 'DESKTOP-L30FJ0M\\SQLEXPRESS', 
    database: 'employee',
    port:1433,
      options: {
        trustedConnection: true,
        trustServerCertificate: true,
        instancename:'SQLEXPRESS'
      },
      useNullAsDefault: true
};

module.exports = config;